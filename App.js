import React, { Component } from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import Expo from "expo";
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Auth from './src/Router';

class App extends Component { 
  
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  
  async componentWillMount() {

    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });

    firebase.initializeApp({
      apiKey: 'AIzaSyDi4xAPGw4MIrxMc8q3tqrC71s_IrDA4nE',
      authDomain: 'ufast-5d939.firebaseapp.com',
      databaseURL: 'https://ufast-5d939.firebaseio.com',
      projectId: 'ufast-5d939',
      storageBucket: 'ufast-5d939.appspot.com',
      messagingSenderId: '117931070291'
    });
    this.setState({ isReady: true }); 
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    if (!this.state.isReady){
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root>
          <Auth />
        </Root>
      </Provider>
    );
  }
}

export default App;
