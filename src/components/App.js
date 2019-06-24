import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Login from '../containers/Login';
import Main from '../containers/Main';
import CreateProduct from '../containers/CreateProduct';
import Cart from '../containers/Cart';
import NotFoundPage from './NotFoundPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/products" component={Main} />
              <Route path="/create" component={CreateProduct} />
              <Route path="/cart" component={Cart} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
