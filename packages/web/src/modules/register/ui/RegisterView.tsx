import * as React from "react";
import { Form, Icon, Input, Button } from "antd";

const FormItem = Form.Item;

export class RegisterView extends React.PureComponent {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          </FormItem>
          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="">login now!</a>
          </FormItem>
        </div>
      </div>
    );
  }
}
