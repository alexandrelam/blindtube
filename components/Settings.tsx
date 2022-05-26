import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { useState } from "react";

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

export function Settings() {
  const [numberOfRounds, setNumberOfRounds] = useState(3);
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
