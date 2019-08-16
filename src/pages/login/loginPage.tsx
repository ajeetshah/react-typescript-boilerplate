import * as React from 'react';
import FsContainedButton from 'src/components/buttons/fsContainedButton';
import './login.css';
import FsTextField from 'src/components/fsTextField';


export default class LoginPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="outer">
          <div id="container">
            <h1>Login</h1>
            <FsContainedButton label="Login" />
            <FsTextField label="InputText" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
