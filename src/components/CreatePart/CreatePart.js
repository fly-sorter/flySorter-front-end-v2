import React from 'react';
import logo from '../../assets/logo.png';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreatePart extends React.Component {
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
      redirectToReferrer: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div className="centered">
          <img src={logo} alt="the logo of fly sorter" />
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

export default CreatePart;
