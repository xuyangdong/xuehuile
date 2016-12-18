import React from 'react'
import {Link } from 'react-router';
import { Menu,Icon } from 'antd';
// import styles from './Navigate.scss'

const NavigateContainer = React.createClass({
  getDefaultProps(){
    return {
      entryList:[{
        '基础信息':'base-info'
      },{
        '通知管理':'notice-mgr'
      }]
    }
  },
  render(){
    const {entryList} = this.props
    return (
      <Menu mode="horizontal">
      {
        entryList.map( entry => {
          let key = Object.keys(entry)[0]
          return (
            <Menu.Item key={key}>
              <Icon type="appstore" /><Link style={{display:'inline'}} to={entry[key]}>{key}</Link>
            </Menu.Item>
          )
        })
      }
      </Menu>
    )
  }
})

export default NavigateContainer
