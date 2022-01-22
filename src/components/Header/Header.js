import React from 'react';
import {AppBar, Toolbar, Typography,Box} from '@material-ui/core'
import useStyles from './styles'

function Header() {
  const classes = useStyles();
  return (
    <AppBar postion="static" >
      <Toolbar className={classes.toolbar} style={{backgroundColor:'black'}}>
          <Typography variant='h5' className={classes.title}>Travel Advisor </Typography>
          <Box display="flex">
              <Typography variant='h6' className={classes.title}>Explore New Places</Typography>
                
                         
              
             
          </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
