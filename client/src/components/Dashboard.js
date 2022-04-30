import { Layout, Menu } from "antd";
import {Link} from 'react-router-dom';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import "./styles/Dashboard.css";
import auth from "./auth";
import apis from "../api/apis";
import { Card } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user:{}
    };
}

  componentDidMount(){
    
    const load = async (values) => {
      console.log("Success:", values);
      const payload = values;
      await apis.LoginID(payload)
      .then((res) => {
        auth.login(()=>{
          console.log(res.data.results)
          this.props.user = res.data.results
        });
      })
      .catch((error) => {
        console.log(error);
        window.alert("Login unsuccessfull");
      })

      
    };
  }
  render() {

    console.log("profile props")
    console.log(this.props)
    return (
      <div>
        <Layout hasSider>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              paddingTop: 65,
              bottom: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to="profile">Profile</Link>
              </Menu.Item>

              <Menu.Item key="3" icon={<UploadOutlined />}>
                Search
              </Menu.Item>
              <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                Donate
              </Menu.Item>
              <Menu.Item key="5" icon={<CloudOutlined />}>
                nav 5
              </Menu.Item>
              <Menu.Item key="6" icon={<AppstoreOutlined />}>
                nav 6
              </Menu.Item>
              <Menu.Item key="7" icon={<TeamOutlined />}>
                nav 7
              </Menu.Item>
              <Menu.Item key="8" icon={<ShopOutlined />}
                onClick={()=>{
                    auth.logout(()=>{console.log("Sidebar logout")})
                }}
              ><Link to="/login">Logout</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ margin: "24px 16px 0", textAlign:"center", fontSize:"20px" }}>
                <h1><b>Welcome {this.props.fullName} !  You have logged in as Donor</b></h1>
            </Header>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, textAlign: "center", height: "470px" }}
              >
                <Card>
                    Dynamic Name of the Hospital goes here <Link to="BloodBank">Open</Link>
                </Card>
                <Card>
                Dynamic Name of the Hospital goes here <Link to="BloodBank">Open</Link>
                </Card>
                <Card>
                Dynamic Name of the Hospital goes here <Link to="BloodBank">Open</Link>
                </Card>
                <Card>
                Dynamic Name of the Hospital goes here <Link to="BloodBank">Open</Link>
                </Card>
                <Card>
                Dynamic Name of the Hospital goes here <Link to="BloodBank">Open</Link>
                </Card>
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Dashboard;
