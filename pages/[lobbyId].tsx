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
import { Settings } from "../components/Settings";
import LinkIcon from "@mui/icons-material/Link";

const Wrapper = styled("div")({
  display: "flex",
  width: "100%",
  maxWidth: "900px",
  flexDirection: "column",
  gap: "3rem",
  margin: "0 auto",
  marginTop: "3rem",
});

const ContentWrapper = styled("div")({
  maxWidth: "800px",
  width: "100%",
  display: "flex",
  margin: "0 3rem",
  justifyContent: "space-between",
});

const LobbyID = styled("span")({
  fontSize: "1.5rem",
  color: "#fff",
});

const LobbyHeaderWrapper = styled("div")({
  display: "flex",
  gap: "1rem",
  margin: "0 3rem",
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
    <>
      {hasPlayerSetName && (
        <div>
          <Header
            playerName={playerName}
            lobbyId={lobbyId as string | undefined}
          />
          <Wrapper>
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
            <ContentWrapper>
              <PlayerList players={lobbyPlayers} />
              <Settings />
            </ContentWrapper>
          </Wrapper>
        </div>
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
    </>
  );
}
