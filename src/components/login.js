//基础组件
import React, { Component } from "react";

//ui组件
import { Input, Button, Form, Alert, Icon, message } from "antd";
import "@/assets/scss/login/login.scss";

//业务组件
import store from "@/store/index.js";
import { SETUSERDATA } from "@/store/actionType";
import * as Fetch from "@/service/fetch.js";
import { API_URL } from "@/assets/mock/fetch_router";
// import { Alert } from './common/common_component'

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //登录事件
  login() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let req = {
          username: values.username,
          password: values.password
        };
        Fetch.post(API_URL.USERLOGIN, req).then(res => {
          // Alert(res.message, res.status);
          if (res.status === 200) {
            const action = {
              type: SETUSERDATA,
              value: res.data[0]
            };
            store.dispatch(action);
            setTimeout(() => {
              this.props.history.push("/home/index");
            }, 1500);
          }
        });
      }
    });
  }
  // 重置输入框
  reset() {}

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login-page">
        <Alert
          message="本平台仅支持 Internet Explorer 11 或更高版本的浏览器访问，推荐使用
          Chrome、 Firefox 等浏览器访问。"
          closable
          type="warning"
          showIcon
        ></Alert>
        <div className="login-panel">
          <h1>管理平台登录</h1>

          <Form>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "请填写用户名" }]
              })(<Input placeholder="请填写用户名" size="large" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请填写密码" }]
              })(<Input type="password" placeholder="请填写密码" size="large" />)}
            </Form.Item>
            <div className="btn-group ant-form-item">
              <Button
                type="primary"
                style={{ marginRight: 15 }}
                onClick={() => this.login()}
              >
                <Icon type="check" />
                登录
              </Button>
              <Button onClick={() => this.reset()}>
                <Icon type="redo" />
                重置
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

login = Form.create({})(login);

export default login;
