import React from 'react'
import NavigateContainer from './container/NavigateContainer'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

const routes = (
  <Router history={browserHistory}>
    <Route path="/test">
      <Route path="navigatecontainer" component={NavigateContainer}>
      </Route>
    </Route>
  </Router>
)
export default routes
