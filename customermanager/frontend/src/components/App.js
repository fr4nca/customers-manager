import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from '../store'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './layout/Header'
import Dashboard from './customers/Dashboard'
import CustomerDetail from './customers/CustomerDetail'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Router>
          <div className='container mt-4'>
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/customer/:id' component={CustomerDetail} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
