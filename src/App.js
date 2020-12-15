import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Vacancy from './components/Search/Vacancy';
import About from './components/About';
import Contacts from './components/Contacts';
import Perspectives from './components/Perspectives';
import Howtouse from './components/Howtouse';
import './App.css';

const useStyles = makeStyles({

  body: {
    margin: 0,
    body: 0,
  },

  navbarDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
  },
});

const navLinks = [
  { title: 'Поиск', path: '/' },
  { title: 'О нас', path: '/about' },
  { title: 'Контакты', path: '/contacts' },
  { title: 'Перспективы', path: '/perspectives' },
  { title: 'Инструкция', path: '/howtouse' },
];

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
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
          <Route exact path="/" component={Vacancy} />
          <Route path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
          <Route path="/perspectives" component={Perspectives} />
          <Route path="/howtouse" component={Howtouse} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
