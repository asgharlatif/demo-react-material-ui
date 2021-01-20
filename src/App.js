import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  testbutton:{
    backgroundColor:"red"
  }
}));



function App() {

  const classes = useStyles()

  return (
    
      <div>
        <Button color="primary">Hello World</Button>
        <br />
        <Button variant="contained" color="Primary">
           Hello World
        </Button>

        <br />
        <Button variant="contained" color="secondary">
           Hello World
        </Button>
        
        <br />
        <Button variant="outlined" color="secondary">
           Hello World
        </Button>
        <br />
        <Button variant="text" color="secondary">
           Hello World
        </Button>
        <Button className={classes.testbutton}>Test Button</Button>

        <Button variant="contained">Default</Button>

        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
        <br />
        <h1>=================================================</h1>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}        
        >
        Send
      </Button>
      <br />
        <h1>=======================GRID USAGE==========================</h1>
        <div className="ex1">
        <Grid container spacing={3}>
      
      <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper >xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper >xs=6</Paper>
                </Grid>

                <Grid item xs={3} style = {{backgroundColor:"red"}}>
                  <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3} style = {{backgroundColor:"green"}}>
                  <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3} style = {{backgroundColor:"pink"}}>
                  <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3} style = {{backgroundColor:"blue"}}>
                  <Paper >xs=3</Paper>
                </Grid>
      </Grid>
        </Grid>  
       
      </div>

      <br />
        <h1>=======================Accordion==========================</h1>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>


      <br />
        <h1>=======================APP BAR==========================</h1>

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  


      </div>
  );
}

export default App;
