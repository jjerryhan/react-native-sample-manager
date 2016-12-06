import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import BaseRouter from './BaseRouter';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAWkVkqSdoVQpqXshgFeaCw7v2SAr1KuOA',
      authDomain: 'manager-18dbd.firebaseapp.com',
      databaseURL: 'https://manager-18dbd.firebaseio.com',
      storageBucket: 'manager-18dbd.appspot.com',
      messagingSenderId: '941395006484'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <BaseRouter/>
      </Provider>
    );
  }
}

export default App;
