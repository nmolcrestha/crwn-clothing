import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './Page/HomePage/homepage.component';
import ShopPage from './Page/shop/shop.component';
import Header from './components/header.component/header.component'


function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
