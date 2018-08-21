import React from "react";
import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const RegisterForm = props => {
  if (props.error) {
    const { name, email, password, password2 } = props.error;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <Title title={"Register"} />
          <Subtitle subtitle={"Create an account to be able to build quiz"} />
          <Input
            errors={props.error.name}
            type={"text"}
            name={"name"}
            placeholder={"write is your name"}
            value={props.nameValue}
            onChange={props.onChange}
          />
          <Input
            errors={props.error.email}
            type="email"
            name={"email"}
            placeholder={"Write is your email address"}
            value={props.emailValue}
            onChange={props.onChange}
          />
          <Input
            errors={props.error.password}
            type={"password"}
            name={"password"}
            placeholder={"password must be longer than 6 character"}
            value={props.passValue}
            onChange={props.onChange}
          />
          <Input
            errors={props.error.password2}
            type={"password"}
            name={"password2"}
            placeholder={"confirm your password"}
            value={props.pass2Value}
            onChange={props.onChange}
          />
          <Button type={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
