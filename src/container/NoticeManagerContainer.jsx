import React from 'react'
import {Row,Col} from 'antd'
import LeftBoard from '../components/LeftBoard'

const NoticeManagerContainer = React.createClass({
  getDefaultProps(){
    return {
      menuList:[{'通知':['新建的通知','收到的通知','发送的通知']}]
    }
  },
  render(){
    return (
      <Row gutter={16}>
        <Col span={6}>
          <LeftBoard menuList={this.props.menuList}/>
        </Col>
        <Col>
          <div>通知管理</div>
        </Col>
      </Row>
    )
  }
})
export default NoticeManagerContainer
