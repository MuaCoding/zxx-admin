import React, { Component } from "react";

//业务组件
import store from "@/store/index";
import { SETMENU } from "@/store/actionType";
import { MODULEDATA } from "@/assets/mock/common_data";

export default class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: []
    };
  }

  componentWillMount() {
    let timer = setInterval(() => {
      if (JSON.stringify(store.getState().userdata) !== "{}") {
        clearInterval(timer);
        let userMsg = store.getState().userdata;
        let newModules = [],
          modules = [];
        userMsg.module_name.forEach(item => {
          MODULEDATA.forEach(tpl => {
            if (tpl.text === item.name) {
              newModules.push(tpl);
            }
          });
        });
        newModules.forEach(item => {
          item.children.forEach(tpl => {
            if (tpl.text !== "模块入口") {
              modules.push(tpl);
            }
          });
        });
        this.setState({ modules });
      }
      clearInterval(timer);
    }, 100);
  }

  goToModule = msg => {
    let menuActive = [];
    MODULEDATA.forEach(item => {
      item.children.forEach(tpl => {
        if (tpl.code === msg.code) {
          menuActive = [item.code, tpl.code];
        }
      });
    });
    const action = {
      type: SETMENU,
      menuActive
    };
    store.dispatch(action);
    this.props.history.push(msg.url);
  };
  render() {
    return (
      <div style={{ marginTop: 20 }} className="home-index">
        <h1 className="title-bold center" style={{ color: "#666" }}>
          欢迎登录shoppingAdmin电商管理平台
        </h1>
        <div>
          {this.state.modules.map((item, index) => {
            return (
              <div span={5} key={index} onClick={() => this.goToModule(item)}>
                <div
                  style={{
                    background:
                      "rgba(" +
                      parseInt(Math.random() * 256) +
                      "," +
                      parseInt(Math.random() * 256) +
                      "," +
                      parseInt(Math.random() * 256) +
                      ")"
                  }}
                  className="home-index-item cursor"
                >
                  <div>
                    <p
                      className={item.icon + " center"}
                      style={{ fontSize: 50 }}
                    ></p>
                    <p className="center bold" style={{ fontSize: 24 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
