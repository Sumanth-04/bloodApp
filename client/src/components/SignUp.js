import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Card, Radio } from "antd";

import { Link } from "react-router-dom";

import "antd/dist/antd.css";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      username: "",
      userMail: "",
      isTeacher: false,
    };
  }
  render() {
    //const { user, username, userMail, isTeacher } = this.state;

    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <div>
        <div className="site-card-border-less-wrapper">
          <Card
            title={<pre>            Sign Up</pre>}
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
                label="Full Name"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Full Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Are you a"
                name="isDonor"
                rules={[
                  {
                    required: true,
                    message: "Please opt this!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio.Button value="true">Donor</Radio.Button>
                  <Radio.Button value="false">Hospital</Radio.Button>
                </Radio.Group>
              </Form.Item>


              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Sign
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 5,
                  span: 16,
                }}
              >
                Already have an account?<Link to="/login"> Log In</Link>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default SignUp;
