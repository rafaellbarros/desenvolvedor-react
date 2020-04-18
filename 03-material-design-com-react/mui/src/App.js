import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1
  }
}

class App extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton></IconButton>
          </Toolbar>
        </AppBar>
        <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
        <br />
          <Button variant="contained" color="primary">Primary</Button><br/>
          <Button variant="contained">Without prop Color</Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);