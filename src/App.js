import React,{useState} from 'react';
import ListPage from './pages/ListPage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import NewLinkPage from './pages/NewLinkPage';
import { Container } from '@material-ui/core';
import {ReactComponent as ReactLogo} from './logo.svg';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Calibri',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div style={{margin: '25px'}}>
          <ReactLogo />
          <Divider />
        </div>
        <Switch>
          <Route exact path="/">
            <ListPage/>
          </Route>
          <Route exact path="/add-link">
            <NewLinkPage/>
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
          </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
