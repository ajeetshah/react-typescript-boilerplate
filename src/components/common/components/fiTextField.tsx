import * as React from 'react';

interface Props {
  label: string;
}

interface State {

}

export default class FITextField extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
        </form>
      </React.Fragment>
    );
  }

}
