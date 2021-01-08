import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInUpPage from "./pages/SignInUpPage/SignInUpPage";
import {auth} from "./firebase/firebase.utils";


class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.state
    return (
      <div>
        <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
