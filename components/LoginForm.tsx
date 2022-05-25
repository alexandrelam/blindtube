import React, { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type Props = {
  playerName: string;
  setPlayerName: Dispatch<SetStateAction<string>>;
  submit: () => void;
};

export function LoginForm({
  playerName: value,
  setPlayerName: setValue,
  submit,
}: Props) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Pseudo cool :)"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="contained" onClick={submit}>
        Démarrer
      </Button>
    </>
  );
}
