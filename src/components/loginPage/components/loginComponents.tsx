import * as React from 'react';
import FIContainedButton from 'src/components/common/components/fiButtons/fiContainedButton';
import '../styles/login.css';
import FITextField from 'src/components/common/components/fiTextField';


export default class LoginPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="outer">
          <div id="container">
            <h1>Login</h1>
            <FIContainedButton label="Login" />
            <FITextField label="InputText" />
          </div>
        </div>

      </React.Fragment>
    );
  }
}
