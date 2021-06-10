

import React,{Fragment} from 'react' ;
import Navbar from './Componetns/layout/Navbar';
import {BrowserRouter as Router,Route,Switch  } from 'react-router-dom'
import Home from './Componetns/pages/Home';
import About from './Componetns/pages/About';
import './App.css';
import ContactState from './Context/contact/ContactState';
import AuthState from './Context/auth/AuthState';
import AlertState from './Context/alert/AlertState';
import Register from './Componetns/auth/Register';
import Login from './Componetns/auth/Login';
import Alerts from './Componetns/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './Componetns/routing/PrivateRoute';

 if(localStorage.token){
            setAuthToken(localStorage.token)
 }

function App() {
  return (
    <AuthState>
    <ContactState >
    <AlertState>
    <Router>
    <Fragment>
      <Navbar />
      <Alerts />
      <Switch> 
      <PrivateRoute exact path='/' component={Home} />
      <Route exact path='/about' >
      <About />
      </Route>
       <Route exact path='/register' >
      <Register />
      </Route>
      <Route exact path='/login' >
      <Login />
      </Route>
      </Switch>
    </Fragment> 
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
  
}

export default App;
