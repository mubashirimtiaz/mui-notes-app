import React from "react";
import { Route, Switch } from "react-router-dom";
import Create from "./pages/create/create.page";
import Notes from "./pages/notes/notes.page";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/layout/Layout.component";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#623451",
    },
    primary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
