import React, { Component } from "react";
import LoginForm from "../molecules/LoginForm";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  onChanged = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user, this.props.history);
  };
  render() {
    let { email, password } = this.state;
    return (
      <div className="login">
        <form onSubmit={this.onSubmit}>
          <LoginForm
            emailValue={email}
            passValue={password}
            onChange={this.onChanged}
            errors={this.props.error}
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
  { loginUser }
)(withRouter(Login));
