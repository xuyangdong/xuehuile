import React from 'react'
import {Row,Col} from 'antd'
import LeftBoard from '../components/LeftBoard'

const BaseInfoContainer = React.createClass({
  getDefaultProps(){
    return {
      menuList:[{'基础信息':['学段','年级','学科']}]
    }
  },
  render(){
    return (
      <Row gutter={16}>
        <Col span={6}>
          <LeftBoard />
        </Col>
        <Col>
          <div>基础信息</div>
        </Col>
      </Row>
    )
  }
})
export default BaseInfoContainer
