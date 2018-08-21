import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import RegisterForm from "../molecules/RegisterForm";
import { registerUser } from "../../actions/authAction";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  onChanged = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = async event => {
    event.preventDefault();
    let { name, email, password, password2 } = this.state;

    const newUser = {
      name,
      email,
      password,
      password2
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    let { name, email, password, password2 } = this.state;
    const { error } = this.props.error;
    return (
      <div className="register">
        <form onSubmit={this.onSubmit}>
          <RegisterForm
            onChange={this.onChanged}
            nameValue={name}
            emailValue={email}
            passValue={password}
            pass2Value={password2}
            error={error}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
