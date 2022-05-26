import "../styles/globals.css";
import type { AppProps } from "next/app";
import { styled } from "@mui/system";

const BackgroundImage = styled("div")({
  backgroundImage: `url("blindtubebg.jpeg")`,
  height: "100vh",
  width: "100vw",
});

const BackgroundBlur = styled("div")({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(200px)",
  height: "100vh",
  width: "100vw",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BackgroundImage>
      <BackgroundBlur>
        <Component {...pageProps} />
      </BackgroundBlur>
    </BackgroundImage>
  );
}

export default MyApp;
