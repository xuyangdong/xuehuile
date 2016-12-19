import React from 'react'
import Navigate from '../components/Navigate'
import {Row,Col} from 'antd'

const MainContainer = React.createClass({
  render(){
    return (
      <div style={{height: '100%'}}>
        <Row>
          <Col span={24}><Navigate /></Col>
        </Row>
        <div style={{height: 'calc( 100% - 48px )'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default MainContainer
