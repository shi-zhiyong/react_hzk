import React, { Component } from 'react'
import {
  Toast,
  Button,
  Flex,
  List,
  InputItem,
  WhiteSpace,
  WingBlank,
  NavBar,
  Icon
} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import './login.css'
import axios from '../../http'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      pwd: ''
    }
  }
  changeValue = (k, v) => {
    // console.log(k, v)
    this.setState({
      [k]: v
    })
  }
  handleLogin = async () => {
    const { history } = this.props
    // console.log(this.state)
    const body = this.state
    const res = await axios.post(`users/login`, body)
    // console.log(res)
    const { meta, data } = res
    if (meta.status === 200) {
      localStorage.setItem('token', data.token)
      // 去 / home
      history.push('/')
      // console.log(this.props)
    } else {
      // 提示
      Toast.fail(meta.msg, 1)
    }
  }
  render() {
    return (
      <Flex direction="column" justify="center">
        <Flex.Item>
          {/* 标题 */}
          <WingBlank size="sm">
            <NavBar mode="dark">登录</NavBar>
          </WingBlank>
          <WhiteSpace size="lg" />
        </Flex.Item>
        <Flex.Item>
          {/* 表单 */}
          <List>
            <WingBlank size="sm">
              <InputItem
                value={this.state.uname}
                onChange={v => {
                  this.changeValue('uname', v)
                }}
              >
                姓名
              </InputItem>
              <InputItem
                value={this.state.pwd}
                onChange={v => {   //直接就是输入的值
                  this.changeValue('pwd', v)
                }}
              >
                密码
              </InputItem>
            </WingBlank>
            {/* 提交按钮 */}
          </List>
          <WhiteSpace size="lg" />

          <WingBlank size="sm">
            <Button onClick={this.handleLogin} type="primary" size="large">
              登录
            </Button>
          </WingBlank>
          <WhiteSpace size="lg" />
        </Flex.Item>
      </Flex>
    )
  }
}

export default Login
