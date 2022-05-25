import type { NextPage } from "next";
import { styled } from "@mui/system";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";

const Container = styled("div")({
  margin: "1rem",
  display: "flex",
  gap: "1rem",
});

const Home: NextPage = () => {
  const [value, setValue] = useState("");

  function joinGame() {
    console.log("joinGame");
  }

  return (
    <Container>
      <LoginForm value={value} setValue={setValue} submit={joinGame} />
    </Container>
  );
};

export default Home;
