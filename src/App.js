import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './Page/HomePage/homepage.component';
import ShopPage from './Page/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './Page/sign-in-sign-up/sign-in-sign-up.component';
import {auth} from './firebase/firebase.util'


class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );

  }
 
}

export default App;
