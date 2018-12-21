import React from 'react';
import { Redirect } from 'react-router-dom';
import cookies from 'react-cookies';

class AuthRedirect extends React.Component {
  render() {
    //cookies.save('auth', 'I am a cookie');
    const token = cookies.load('auth');

    return (
      <div>
        {!token ? <Redirect to="/signin" /> : <Redirect to="/part-table" />}
      </div>
    );
  }
}

export default AuthRedirect;
