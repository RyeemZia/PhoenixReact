import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import { Card } from '@material-ui/core';
import CustomBtn from './components/CustomBtn'
import SecondBtn from './components/SecondBtn'

import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/BarChart';
import EventNoteIcon from '@material-ui/icons/Notes';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#fffafa",
    },
    secondary: {
      main:"#ff5900",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      justifyContent: "center",


      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
      justifyContent: "center",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
    title: "center"
  },
  button:{
    justifyContent: "center",
  }
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h3" className={classes.bigSpace} color="secondary">
             Better Creatives 
          </Typography>
          <Typography variant="h4" className={classes.littleSpace} color="primary">
            Making the product is Step 1. 
          </Typography>
          <Typography variant="h4" className={classes.littleSpace} color="primary">
            Market outreach is everything else. 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          We use tried and true industry practices to boost engagement and drive sales. We make delivering innovative solutions a predictable process.

          </Typography>
    

        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="SEO"  btnTitle="Analytics"/>
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Copywriting"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="SEO"/>
        </div>
        
        <div className={classes.wrapper}>
          
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            We assess your needs and make a plan to get you where you want to be.
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            We match you with a staff member that fits your needs and will exclusively work on your account.
          </Typography>
        </div>
        <Typography variant="h3" className={classes.bigSpace} color="secondary">
             Contact Us
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            aferreira@phoenixoutreach.com
            
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            rzia@phoenixoutreach.com  
          </Typography>
          <div>
      <Grid container justify="center">
      <SecondBtn txt="Setup a call today"/>
      </Grid>
    </div>
          <div className={classes.button}>
          <SecondBtn txt="Setup a call today"/>
          </div>

        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
