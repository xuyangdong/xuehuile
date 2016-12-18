import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router';
import { Breadcrumb } from 'antd';

const NavigateContainer = React.createClass({

  render(){
    const {routes, params, children} = this.props
    return (
      <div>
        <div className="demo-nav">
          <Link to="/">Home</Link>
          <Link to="/apps">Application List</Link>
        </div>
        {children || 'Home Page'}
        <Breadcrumb routes={routes} params={params} />
      </div>
    )
  }
})

export default NavigateContainer
