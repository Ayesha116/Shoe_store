import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(5),
    color: "white",
    fontSize : "20px",
    fontWeight: "bold",
    textDecoration: "none",
  },
 
 
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
         
          <Link to = "/" className = {classes.link}>Home </Link>{"   "}
          <Link to = "products"  className = {classes.link} >Products</Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
