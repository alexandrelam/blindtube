import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getValue, setValue } from "../firebase";

const Title = styled("h2")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "white",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

type Props = {
  lobbyId: string;
};

export function Settings({ lobbyId }: Props) {
  const [numberOfRounds, setNumberOfRounds] = useState<number>(0);

  useEffect(() => {
    getValue(`lobby/${lobbyId}/numberOfRounds`, setNumberOfRounds);
    if (numberOfRounds)
      setValue(`lobby/${lobbyId}/numberOfRounds`, numberOfRounds);
  }, [lobbyId, numberOfRounds]);

  return (
    <Wrapper>
      <Title>Paramètres</Title>
      <TextField
        id="filled-basic"
        label="Nombre de rounds"
        variant="filled"
        type="number"
        value={numberOfRounds}
        onChange={(e) => setNumberOfRounds(parseInt(e.target.value))}
      />
    </Wrapper>
  );
}
