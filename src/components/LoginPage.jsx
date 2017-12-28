import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { FormField } from 'rmwc/FormField';
import { TextField } from 'rmwc/TextField';


import '../../node_modules/material-components-web/dist/material-components-web.css';
import '../css/welcome-page.css';



export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Code Audit Manager</h1>
        <FormField className="login-card">
            <TextField label="Username" id="username" />
            <div><TextField label="Password" id="password" type="password" /></div>
            <Button raised theme={['primary-bg', 'text-primary-on-secondary']}>login</Button>
        </FormField>
      </div>
    )
  }
}

