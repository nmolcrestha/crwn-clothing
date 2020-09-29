import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import HomePage from './Page/HomePage/homepage.component';
import ShopPage from './Page/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './Page/sign-in-sign-up/sign-in-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';

import {setCurrentUser} from './redux/user/user.actions';


class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
          
          console.log(this.state)
        });
      }
      setCurrentUser(userAuth);
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );

  }
 
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
