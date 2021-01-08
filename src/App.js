import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInUpPage from "./pages/SignInUpPage/SignInUpPage";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
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
