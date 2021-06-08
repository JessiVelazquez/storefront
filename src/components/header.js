import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';


function Header() {
  return (
    <AppBar position="static">
      <Typography variant="h6">
        <h1>Hot Threads</h1>
      </Typography>
    </AppBar>
  )
}

export default Header;