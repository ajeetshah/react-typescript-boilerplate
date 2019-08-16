import * as React from 'react';
import './home.css';

const style_text: React.CSSProperties = {
  position: 'absolute',
  top: '45%',
  textAlign: 'center',
  fontSize: 35,
  transform: 'translate(-50%,-50%)',
  left: 'calc(50% - 10px)',
  color: 'blueviolet'
}

const style_icon: React.CSSProperties = {
  position: 'absolute',
  top: 'calc(45% - 50px)',
  textAlign: 'center',
  fontSize: 45,
  transform: 'translate(-50%,-50%)',
  left: 'calc(50% - 10px)',
  color: 'blueviolet'
}

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <i className="fas fa-search-dollar" style={style_icon}></i>
        <div style={style_text}>
          FinoptSys
        </div>
      </React.Fragment>
    );
  }
}
