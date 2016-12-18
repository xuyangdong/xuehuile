import React from 'react'
import Navigate from '../components/Navigate'
import {Row,Col} from 'antd'

const MainContainer = React.createClass({
  render(){
    return (
      <div>
        <Row>
          <Col span={24}><Navigate /></Col>
        </Row>
        {this.props.children}
      </div>
    )
  }
})

export default MainContainer
