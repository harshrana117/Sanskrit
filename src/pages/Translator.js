import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link as LinkR } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Sanscript from '../@sanskrit-coders/sanscript/sanscript.js';
import Sanscript from '../@sanskrit-coders/sanscript/sanscript.js';


console.log(Sanscript.t('\\##aham', 'itrans', 'devanagari')); // ##अहम्


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  LinkR: {
    color: theme.palette.primary.main
  }
}));

const Translator = () => {

  const classes = useStyles();

  const [text, setText] = useState("");

  const handleText = event => {
    setText(event.target.value);
  }



  return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
                </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleText}
            />     
          </form>
        </div>
      </Container>
    </Slide>
    )
}

export default Translator;




