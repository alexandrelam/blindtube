import type { NextPage } from "next";
import { styled } from "@mui/system";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";
import { addPlayer } from "../firebase/users";

const Container = styled("div")({
  margin: "1rem",
  display: "flex",
  gap: "1rem",
});

const Home: NextPage = () => {
  const [value, setValue] = useState("");

  async function joinGame() {
    try {
      await addPlayer(value);
      console.log("Player added");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <LoginForm value={value} setValue={setValue} submit={joinGame} />
    </Container>
  );
};

export default Home;
