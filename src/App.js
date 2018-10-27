import React, { Component } from 'react';
import './App.css';
import store from './state/store/store';
import { Provider } from 'react-redux';
import Users from './components/Users/Users';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Users/>
        </div>
      </Provider>
    );
  }
}

export default App;
