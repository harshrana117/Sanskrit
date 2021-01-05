import React, {useState, useEffect} from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {auth, createUserProfileDocument} from './firebase/firebase.js'
import Navbar from './Components/Navbar'
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import CompetePage from './pages/CompetePage';
import ContentPage from './pages/ContentPage';
import Translator from './pages/Translator';
import Login from './pages/Login';


const useStyles = makeStyles({
  container: {
      overflow:'hidden'
  }
});

const App = () => {
  const [user, setUser] = useState("")

  useEffect (() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      await createUserProfileDocument(user)
      await setUser(user)
    })

    return unsubscribeFromAuth
    }, [])

  console.log(user)

  const classes = useStyles();
  return (
    <div>
    {
      (user !== null) ? (
      <div>
        <HashRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/"  component={HomePage} />
            <Route exact path="/learn"  component={LearnPage} />
            <Route exact path="/compete"  component={CompetePage} />
            {/* ye wala page ko manually khol ke dekh lena, time nhi tha isliye aise kr diye h */}
            <Route exact path="/content"  component={ContentPage} />
          </Switch>
        </HashRouter>
      </div>
      )
      :
      (
        <div>
        <HashRouter>
          <Navbar/>
          <Route exact path="/login" component={Login} />
          <Route path="*" render={() => <Redirect to='/login' />} />
          <Switch>
          </Switch>
        </HashRouter>
      </div>
      )}
    </div>
  )
}

export default App;
