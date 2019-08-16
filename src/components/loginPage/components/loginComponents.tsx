import * as React from 'react';
import FIContainedButton from 'src/components/common/components/fiButtons/fiContainedButton';

export default class LoginPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <FIContainedButton label="Login"/>
      </React.Fragment>
    );
  }
}
