import React from 'react';
import logo from '../../assets/logo.png';
import failedLogin from '../../assets/failedLogin.png';
import successLogin from '../../assets/successLogin.png';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cookies from 'react-cookies';

import './signup.scss';
import * as actions from './signupAction.js';

const minUserName = 5;
const minPassword = 7;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      recoveryQuestion: 'pet',
      recoveryAnswer: '',
      password: '',
      usernameError: '',
      passwordError: '',
      answerError: '',
      checkImg: '',
      redirectToReferrer: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let check1 = document.getElementsByClassName('check1');
    let check2 = document.getElementsByClassName('check2');
    let check3 = document.getElementsByClassName('check3');
    console.log(check1);
    check1[0].style.display = 'inline';
    check2[0].style.display = 'inline';
    check3[0].style.display = 'inline';
    if (this.state.username.length < minUserName) {
      this.setState({
        usernameError: 'Please enter an username with 5 or more characters.'
      });

      console.log(failedLogin);
    }
    if (this.state.password.length < minPassword) {
      this.setState({
        passwordError: 'Please enter an password with 7 or more characters.'
      });
    }

    if (this.state.recoveryAnswer.length === 0) {
      this.setState({
        answerError: 'Please enter an answer to the recovery question.'
      });
    }

    if (this.state.username.length > minUserName) {
      this.setState({
        usernameError: ''
      });
      check1[0].src = successLogin;
    }
    if (this.state.recoveryAnswer.length > 0) {
      this.setState({
        answerError: ''
      });
      check2[0].src = successLogin;
    }
    if (this.state.password.length > minPassword) {
      this.setState({
        passwordError: ''
      });
      check3[0].src = successLogin;
    }

    if (this.state.username.length > minUserName) {
      this.setState({
        usernameError: ''
      });
    }
    if (this.state.password.length > minPassword) {
      this.setState({
        passwordError: ''
      });
    }

    if (
      this.state.recoveryAnswer.length > 0 &&
      this.state.username.length > minUserName &&
      this.state.password.length > minPassword
    ) {
      console.log(this.state);
      this.props.submitSignup(this.state);
      cookies.save('auth', 'granted');
      let authToken = cookies.load('auth');
      if (authToken) {
        this.setState({ redirectToReferrer: true });
      }
    }
  };

  render() {
    if (this.state.redirectToReferrer) return <Redirect to="/authRedirect" />;
    return (
      <div>
        <img src={logo} alt="the logo of fly sorter" />

        <div className="centered">
          <div className="signin">
            <form>
              <li>
                <label type="username">User Name</label>
                <input
                  type="text"
                  placeholder="please enter your username"
                  name="username"
                  onChange={this.handleChange}
                />
                <img
                  src={failedLogin}
                  alt="check to verify the state of successful signup"
                  className="check1"
                />
              </li>
              <p>{this.state.usernameError}</p>
              <li>
                <label for="recoveryQuestion">Choose a Question</label>
                <select
                  name="recoveryQuestion"
                  placeholder="recovery question"
                  type="select"
                  onChange={this.handleChange}
                >
                  <option value="pet">Name of your first pet?</option>
                  <option value="street">Street you grew up on</option>
                  <option value="car">Make of your first car</option>
                  <option value="team">Favorite Sports Team</option>
                </select>
              </li>
              <li>
                <label type="recovery-answer">Answer to your question</label>
                <input
                  type="text"
                  placeholder="please enter your recovery answer"
                  name="recoveryAnswer"
                  onChange={this.handleChange}
                />
                <img
                  src={failedLogin}
                  alt="check to verify the state of successful signup"
                  className="check2"
                />
              </li>
              <p>{this.state.answerError}</p>
              <li>
                <label type="password">Password</label>
                <input
                  type="password"
                  placeholder="please enter your password"
                  name="password"
                  onChange={this.handleChange}
                />
                <img
                  src={failedLogin}
                  alt="check to verify the state of successful signup"
                  className="check3"
                />
              </li>
              <p>{this.state.passwordError}</p>
              <button type="submit" onClick={this.handleSubmit}>
                Signup
              </button>
            </form>
          </div>
        </div>
        <p className="base">Already have an account?</p>
        <Link to="/signin">Login</Link>
      </div>
    );
  }
} //end class LOGIN

const mapDispatchToProps = (dispatch, getState) => ({
  submitSignup: component =>
    dispatch(
      actions.submitSignup({
        username: component.username,
        password: component.password,
        recoveryQuestion: component.recoveryQuestion,
        recoveryAnswer: component.recoveryAnswer
      })
    )
});

const mapStateToProps = state => ({
  main: state.main
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
