import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { removePlayerName } from "../firebase/localstorage/playerName";
import { removePlayerFromLobby } from "../firebase/player";

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100px",
  padding: "0 2rem",
  borderBottom: "1px solid #4F3065",
});

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
});

const Title = styled("h1")({
  fontSize: "1.7rem",
  fontWeight: "bold",
  color: "white",
  letterSpacing: "0.5rem",
});

const PlayerName = styled("span")({
  fontSize: "1rem",
  fontWeight: "bold",
  color: "white",
});

type Props = {
  playerName: string;
  lobbyId?: string;
};

export function Header({ playerName, lobbyId }: Props) {
  const router = useRouter();

  function handleQuit() {
    if (!lobbyId) return;
    removePlayerName();
    removePlayerFromLobby(lobbyId, playerName);
    router.push("/");
  }

  return (
    <Container>
      <Title>🎵 BLINDTUBE</Title>
      <Wrapper>
        <PlayerName>{playerName}</PlayerName>
        {lobbyId && (
          <Button variant="outlined" color="secondary" onClick={handleQuit}>
            Quitter
          </Button>
        )}
      </Wrapper>
    </Container>
  );
}
