import React from "react";
import { Form, Input, Button, Checkbox,Card } from "antd";
import "antd/dist/antd.css";
import auth from "./auth";
import { Link, Navigate } from "react-router-dom";
import {withRouter} from "./WithRouter";

import apis from "../api/apis"
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user:{}
    };
  }
  
  render() {
    const onFinish = async (values) => {
      console.log("Success:", values);
      const payload = values;
      await apis.LoginID(payload)
      .then((res) => {
        auth.login(()=>{
          console.log(this.props);
          console.log(res.data.result)
          let r = res.data.result;
          this.state.user = res.data.results
          this.props.setData(
            r.email_id,r.fullName,r.isDonor
          );
          this.props.navigate('/dashboard',this.state)
        });
      })
      .catch((error) => {
        console.log(error);
        window.alert("Login unsuccessfull");
      })

      
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <div>
        <div className="site-card-border-less-wrapper">
          <Card
            title={<pre>              Login</pre>}
            bordered={true}
            style={{ width: 400, marginTop: "6%", marginLeft: "33%" }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email ID"
                name="email_id"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              {/*<Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>*/}

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" >
                  Log In
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 5,
                  span: 16,
                }}>
                <Link to="/dashboard"> dash Up</Link>
              Don't have an account?<Link to="/sign"> Sign Up</Link>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
