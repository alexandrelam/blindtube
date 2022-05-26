import "../styles/globals.css";
import type { AppProps } from "next/app";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <BackgroundImage>
        <BackgroundBlur>
          <Component {...pageProps} />
        </BackgroundBlur>
      </BackgroundImage>
    </ThemeProvider>
  );
}

export default MyApp;
