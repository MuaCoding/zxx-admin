//基础组件
import React, { Component } from "react";

//业务组件
import store from "@/store/index";
import { SETMENU } from "@/store/actionType";
import { MODULEDATA } from "@/assets/mock/common_data";

// 样式组件
import "@/assets/scss/index/index.scss";
//路由组件
import HomeRouter from "@/router/children/home";

//ui组件
import { Menu, Layout, Popover, Breadcrumb, Divider } from "antd";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: store.getState().menuActive,
      userdata: store.getState().userdata,
      rootList: [],
      moduleTitle: []
    };
    store.subscribe(this.handleChange);
  }

  componentWillMount() {
    let contentHeight = document.documentElement.clientHeight - 64;
    this.setState({ contentHeight });
    if (JSON.stringify(store.getState().userdata) !== "{}") this.init();
  }
  //模块跳转
  goToModal = (pText, text, url) => {
    let moduleTitle = [pText, text];
    this.setState({ moduleTitle }, () => {
      this.props.history.push(url);
    });
  };

  handleChange = () => {
    console.log(store.getState());
    //更新store
    this.setState(
      {
        userdata: store.getState().userdata,
        menuActive: store.getState().menuActive
      },
      () => {
        //更新store的同时，把store内的高亮菜单code转化为text赋值到视图
        let moduleTitle = this.state.moduleTitle;
        MODULEDATA.forEach(item => {
          if (item.code === this.state.menuActive[0]) {
            moduleTitle[0] = item.text;
            item.children.forEach(tpl => {
              if (tpl.code === this.state.menuActive[1]) {
                moduleTitle[1] = tpl.text;
              }
            });
          }
        });
        this.setState({ moduleTitle });
      }
    );
    this.init();
  };

  init() {
    let userMsg = store.getState().userdata;
    let rootList = [];
    userMsg.module_name.forEach(item => {
      MODULEDATA.forEach(tpl => {
        if (item.name === tpl.text) {
          rootList.push(tpl);
        }
      });
    });
    this.setState({
      userdata: store.getState().userdata,
      rootList
    });
  }

  setMenuChild = msg => {
    //二级菜单模块切换
    let menuActive = this.state.menuActive;
    menuActive = [msg.keyPath[1], msg.keyPath[0]];
    this.setState({ menuActive });
    const action = {
      type: SETMENU,
      menuActive
    };
    store.dispatch(action);
  };
  setMenuParent = msg => {
    //储存父级子菜单code
    this.setState({
      menuActive: [msg[1], ""]
    });
  };
  render() {
    return (
      <div>
        <Layout>
          <Content>
            <Header
              style={{
                background: "#515a6e",
                position: "fixed",
                zIndex: 1,
                height: 64,
                width: "100%",
                minWidth: "1350px"
              }}
            >
              <div className="site-logo">
                <span className="inner-text">云喵管理平台</span>
              </div>
              <div className="user-info">
                <div className="user-avatar">
                  <img></img>
                </div>
                <span className="user-name">admin</span>
                <a className="exit-link">退出</a>
              </div>
            </Header>
          </Content>
          <Layout>
            <Sider
              width={200}
              style={{
                background: "#fff",
                overflow: "auto",
                height: "100vh",
                marginTop: 64,
                position: "fixed",
                left: 0
              }}
            >
              <Menu
                theme="'#152330'"
                mode="inline"
                selectedKeys={[this.state.menuActive[1]]}
                openKeys={[this.state.menuActive[0]]}
                style={{ height: "100%" }}
                onClick={this.setMenuChild}
                onOpenChange={this.setMenuParent}
              >
                {this.state.rootList.map((item, index) => {
                  return (
                    <SubMenu
                      key={item.code}
                      title={
                        <span className="flex">
                          <i
                            style={{ fontSize: "22px" }}
                            className={item.icon}
                          ></i>
                          <span style={{ marginLeft: "25px" }}>
                            {item.text}
                          </span>
                        </span>
                      }
                    >
                      {item.children.map((tpl, i) => {
                        return (
                          <Menu.Item key={tpl.code}>
                            <p
                              onClick={() =>
                                this.goToModal(item.text, tpl.text, tpl.url)
                              }
                            >
                              {tpl.text}
                            </p>
                          </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  );
                })}
              </Menu>
            </Sider>
            <Layout
              style={{ marginLeft: 200, background: "#fff", marginTop: 64 }}
            >
              <Breadcrumb style={{ marginTop: 20, marginLeft: 20 }}>
                <Breadcrumb.Item>{this.state.moduleTitle[0]}</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span>{this.state.moduleTitle[1]}</span>
                </Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="home-content"
                style={{
                  padding: "0 24px",
                  minHeight: this.state.contentHeight,
                  minWidth: 1150
                }}
              >
                {HomeRouter}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
