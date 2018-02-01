import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './modules/routes';
import Home from './home';
import { Navigation, withAuthorization } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/login" component={() => <h1>Please login here</h1>} />
      </div>
    );
  }
}

export default App;
