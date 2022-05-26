import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const Container = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
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
};

export function Header({ playerName }: Props) {
  return (
    <Container>
      <Title>🎵 BLINDTUBE</Title>
      <Wrapper>
        <PlayerName>{playerName}</PlayerName>
        <Button variant="outlined" color="secondary">
          Quitter
        </Button>
      </Wrapper>
    </Container>
  );
}
