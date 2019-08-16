import * as React from 'react';

interface Props {
  label: string;
}

interface State {

}

export default class FsContainedButton extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <button type="button" className="btn btn-primary">{this.props.label}</button>
      </React.Fragment>
    );
  }
}
