import { Container } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import { Outlet } from "react-router-dom";
import Header1 from "./Component/Headers/Header1";
import Header2 from "./Component/Headers/Header2";
import Header3 from "./Component/Headers/Header3";

export default function MasterLayout() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Header1 />
          <Header2 />
          <Header3/>
          {/* <Hero /> */}
        </Container>
        <Outlet />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
