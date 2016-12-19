import React from 'react'
import {Row,Col} from 'antd'
import LeftBoard from '../components/LeftBoard'
import EditorComponent from '../components/PlainTextEditor'

const BaseInfoContainer = React.createClass({
  getInitialState(){
    return {}
  },

  getDefaultProps(){
    return {
      menuList:[{'基础信息':['学段','年级','学科']}]
    }
  },

  handleOnChange(editorState){
    this.setState({editorState});
  },

  render(){
    return (
      <Row gutter={16} style={{height:'100%'}}>
        <Col span={6} style={{height:'100%'}}>
          <LeftBoard menuList={this.props.menuList}/>
        </Col>
        <Col span={18}>
          <div>
            <EditorComponent></EditorComponent>
          </div>
        </Col>
      </Row>
    )
  }
})
export default BaseInfoContainer
