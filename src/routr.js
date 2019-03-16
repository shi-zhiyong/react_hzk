// 路由模块

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter,
  NavLink
} from 'react-router-dom'
import Login from './components/login/login'

import Home from './components/home/home'

class RouterCom extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    )
  }
}

export default RouterCom
