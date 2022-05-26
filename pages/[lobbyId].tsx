import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isLobbyExist as isLobbyExistPromise } from "../firebase/lobby";
import { getValue } from "../firebase";
import { getPlayerName } from "../firebase/localstorage/playerName";
import { LoginForm } from "../components/LoginForm";
import { addPlayerToLobby, isPlayerInLobby } from "../firebase/player";
import { Header } from "../components/Header";
import { styled } from "@mui/system";
import { getPlaylist } from "../firebase/localstorage/playlist";
import { Button } from "@mui/material";
import { PlayerList } from "../components/PlayerList";
import LinkIcon from "@mui/icons-material/Link";

const Container = styled("div")({
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
});

const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});

const LobbyID = styled("span")({
  fontSize: "1.5rem",
  color: "#fff",
});

const LobbyHeaderWrapper = styled("div")({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});

async function lobbyDoesntExistRedirect(
  lobbyId: string,
  router: ReturnType<typeof useRouter>
) {
  const isLobbyExist = await isLobbyExistPromise(lobbyId);
  if (!isLobbyExist) await router.push("/");
}

export default function Lobby() {
  const router = useRouter();
  const [playerName, setPlayerName] = useState<string>("");
  const [playlistURL, setPlaylistURL] = useState<string>("");
  const [hasPlayerSetName, setHasPlayerSetName] = useState<boolean>(false);
  const [lobbyPlayers, setLobbyPlayers] = useState<string[]>([]);
  const { lobbyId } = router.query;

  useEffect(() => {
    if (lobbyId) {
      (async () => {
        await lobbyDoesntExistRedirect(lobbyId as string, router);

        // if player has set a name in localstorage then use it
        if (getPlayerName()) {
          setPlayerName(getPlayerName());
          setHasPlayerSetName(true);
        }

        // if player has playlist in localstorage then use it
        if (getPlaylist()) {
          setPlaylistURL(getPlaylist());
        }

        getValue(`lobby/${lobbyId}/players`, setLobbyPlayers);
      })();
    }
  }, [lobbyId, router]);

  async function joinLobby() {
    if (!(await isPlayerInLobby(lobbyId as string, playerName)))
      await addPlayerToLobby(lobbyId as string, playerName, playlistURL);
    setHasPlayerSetName(true);
  }

  return (
    <Container>
      {hasPlayerSetName && (
        <>
          <Header playerName={playerName} />
          <ContentWrapper>
            <LobbyHeaderWrapper>
              <LobbyID>
                <strong>Lobby id: </strong>
                {lobbyId}
              </LobbyID>
              <Button
                variant="outlined"
                onClick={() => console.log("test")}
                startIcon={<LinkIcon />}
              >
                Inviter
              </Button>
            </LobbyHeaderWrapper>
            <PlayerList />
          </ContentWrapper>
        </>
      )}
      {!hasPlayerSetName && (
        <LoginForm
          playerName={playerName}
          setPlayerName={setPlayerName}
          playlistURL={playlistURL}
          setPlaylistURL={setPlaylistURL}
          submit={joinLobby}
          isJoining
        />
      )}
    </Container>
  );
}
