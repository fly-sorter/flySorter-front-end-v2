import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Add AWS Resources
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

import './reset.scss';
import './base.scss';
import AuthRedirect from './AuthRedirect/AuthRedirect.js';
import Signin from './Signin/Signin.js';
import Signup from './Signup/Signup.js';
import Dashboard from './Dashboard/Dashboard.js';
import CreatePart from './CreatePart/CreatePart.js';
import CreateSub from './CreateSub/CreateSub.js';
import EditPart from './EditPart/EditPart.js';
import SubTableDash from './SubDashboard/SubDashboard.js';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="*" component={AuthRedirect} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/part-table" component={Dashboard} />
            <Route path="/sub-table" component={SubTableDash} />
            <Route path="/createpart" component={CreatePart} />
            <Route path="/editpart" component={EditPart} />
            <Route path="/createsub" component={CreateSub} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default withAuthenticator(App, true);