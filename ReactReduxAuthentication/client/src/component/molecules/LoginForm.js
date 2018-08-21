import React from "react";
import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const LoginForm = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <Title title={"Login"} />
          <Subtitle subtitle={"Sign in to your account"} />
          <Input
            errors={props.errors.error.email}
            type="email"
            name={"email"}
            placeholder={"Email Address"}
            value={props.emailValue}
            onChange={props.onChange}
          />
          <Input
            errors={props.errors.error.password}
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            value={props.passValue}
            onChange={props.onChange}
          />
          <Button type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
