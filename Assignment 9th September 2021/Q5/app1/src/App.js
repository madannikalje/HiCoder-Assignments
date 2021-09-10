import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


let useStyles = makeStyles(theme => ({
    title: {
      flexGrow:1,
      fontFamily: "Quicksand",
    },
    bar:{
      background: "rgba( 255, 255, 255, 0 )",
      backdropFilter: "blur( 0px )",
      WebkitBackdropFilter: "blur( 0px )",
      borderRadius: "10px",
      fontFamily: "Quicksand",
      height:"4rem"
    },
    button: {
      fontFamily: "Quicksand",
      padding:"1.4rem"
    },
    head:{
      fontFamily: "Quicksand",
      color:"white",
      textAlign: "center",
      marginTop:"16rem",
      opacity:"80%",
    }
}));


function App() {
  let classes = useStyles()
  return (
    <div className="root">
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            M A T E R I A L
          </Typography>
          <Button className={classes.button} color="inherit">LOGIN</Button>
          <Button className={classes.button} color="inherit">HOME</Button>
          <Button className={classes.button} color="inherit">ABOUT</Button>
          <Button className={classes.button} color="inherit">CONTACT</Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h1" className={classes.head}>
            Hello From Madan.
          </Typography>
    </div>
  );
}

export default App;

