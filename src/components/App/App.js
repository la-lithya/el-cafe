import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from '../Main';
import Home from '../Home';
import Admin from '../Admin';
import Account from '../Account';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Navigation from '../Navigation/Navigation';
import '../../styles/app.scss';
import {MAIN, SIGN_IN, SIGN_UP, PASSWORD_FORGET, HOME, ACCOUNT, ADMIN} from '../../constants/routes';
import PasswordForget from '../PasswordForget';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Route exact path={MAIN} component={Main} />
        <Route path={HOME} component={Home} />
        <Route path={SIGN_IN} component={SignIn} />
        <Route path={SIGN_UP} component={SignUp} />
        <Route path={ADMIN} component={Admin} />
        <Route path={ACCOUNT} component={Account} />
        <Route path={PASSWORD_FORGET} component={PasswordForget} />
      </Router>
    );
  }
}

export default App;
