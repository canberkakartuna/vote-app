import React from 'react';
import ListPage from './pages/ListPage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import NewLinkPage from './pages/NewLinkPage';
import { Container, Typography } from '@material-ui/core';
import './App.css';
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
        <div style={{margin: '25px 25px 10px 25px', display: 'flex'}}>
          <ReactLogo/>
          <span style={{flexGrow: 1}}></span>
          <Typography><strong>Link</strong>VOTE Challenge</Typography>
        </div>
        <Divider style={{marginBottom: '25px'}} />
        <Switch>
          <Route exact path="/vote-app">
            <ListPage/>
          </Route>
          <Route exact path="/vote-app/add-link">
            <NewLinkPage/>
          </Route>
          <Route path="*">
            <Redirect to="/vote-app"/>
          </Route>
          </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
