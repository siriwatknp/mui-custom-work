import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { applicationTheme } from "./theme";

import AdsButton from "./components/CustomComponent";

function App() {
  return (
    <ThemeProvider theme={applicationTheme}>
      <CssBaseline />
      <Box textAlign="center">
        <Typography variant="h4">Hello Material-UI</Typography>
        <Button>Get Started</Button>
        <AdsButton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
