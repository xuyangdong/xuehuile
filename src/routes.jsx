import React from 'react'
import {Router, Route, browserHistory,IndexRedirect} from 'react-router'
import MainContainer from './container/MainContainer'
import BaseInfoContainer from './container/BaseInfoContainer'
import NoticeManagerContainer from './container/NoticeManagerContainer'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRedirect to='/base-info' />
      <Route path='/base-info' component={BaseInfoContainer}></Route>
      <Route path='notice-mgr' component={NoticeManagerContainer} />
    </Route>
  </Router>
)
export default routes
