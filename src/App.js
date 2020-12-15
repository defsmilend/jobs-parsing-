import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import Search from './components/Search'
import About from './components/About'
import Contacts from './components/Contacts'
import Feauters from './components/Feuters'
import Howtouse from './components/Howtouse'
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import './App.css'


const useStyles = makeStyles({
  
  body: {
    margin:0,
    body:0
  },

  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `search`, path: `/` },
  { title: `about us`, path: `/about` },
  { title: `contacts`, path: `/contacts` },
  { title: `feauters`, path: `/feuters` },
  { title: `How to use`, path: `/howtouse` }
];

const App = () => {
  const classes = useStyles();
  return(
    <Router>
  <div>
            <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <Link to={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>

        <Switch>
      <Route exact path='/' component={Search}/>
      <Route path='/about' component={About}/>
      <Route exact path='/contacts' component={Contacts}/>
      <Route path='/features' component={Feauters}/>
      <Route path='/howtouse' component={Howtouse}/>
    </Switch>
  </div>
  </Router>
)
}
export default App
