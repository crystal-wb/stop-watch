import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Clock from './Clock.js';
import Stopwatch from './Stopwatch.js';
import 'typeface-roboto';
import {theme} from './Theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Paper elevation={5}>
            <br/>
            <Clock />
            <br/>
          </Paper>
          <Paper elevation={5}>
            <br/>
            <Typography variant='display2'>Stopwatch</Typography>
            <Stopwatch/>
          </Paper>
        </div>
      </MuiThemeProvider>
     
    );
  }
}

export default App;
