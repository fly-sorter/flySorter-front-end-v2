import React from 'react';
import './signin.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import superagent from 'superagent';
import cookies from 'react-cookies';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  async handleSubmit(event, loginHandler) {
    event.preventDefault();
    const { username, password } = this.state;
    console.log('USERNAME: ', username);
    console.log('PASSWORD: ', password);
    cookies.save('auth', 'granted');
    let authToken = cookies.load('auth');
    if (authToken) {
      this.setState({ redirectToReferrer: true });
    }
    // await superagent
    //   .post(`/signin`)
    //   .auth(username, password)
    //   .then(response => {
    //     const token = response.text;
    //     loginHandler(token);
    //   })
    //   .catch(console.error);
  }

  render() {
    if (this.state.redirectToReferrer) return <Redirect to="/authRedirect" />;
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
                  required
                />
              </li>
              <li>
                <label type="password">Password</label>
                <input
                  type="password"
                  placeholder="please enter your password"
                  name="password"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <button type="submit" onClick={this.handleSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
        <p className="base">No account?</p>
        <Link to="/signup">Create an account</Link>
      </div>
    );
  }
} //end class LOGIN

export default Signin;
