import React from 'react';
import ListPage from './pages/ListPage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import NewLinkPage from './pages/NewLinkPage';
import { Container, Typography } from '@material-ui/core';
import {
  withWidth
} from '@material-ui/core';
import './App.css';
import {ReactComponent as ReactLogo} from './logo.svg';
import {
  HashRouter,
  Route,
  Redirect
} from "react-router-dom";
import { isWidthUp } from '@material-ui/core/withWidth';

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

function App({ width }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div style={{margin: isWidthUp('md', width) ? '15px 25px 10px 25px' : '15px 15px 10px 5px', display: isWidthUp('md', width) ? 'flex' : 'block'}}>
          <ReactLogo/>
          <span style={{flexGrow: 1}}></span>
          <Typography><strong>Link</strong>VOTE Challenge</Typography>
        </div>
        <Divider style={{marginBottom: '25px'}} />
        <HashRouter>
          <Route exact path="/vote-app">
            <ListPage/>
          </Route>
          <Route exact path="/vote-app/add-link">
            <NewLinkPage/>
          </Route>
          <Route path="*">
            <Redirect to="/vote-app"/>
          </Route>
        </HashRouter>
      </Container>
    </ThemeProvider>
  );
}

export default withWidth()(App);