import * as React from 'react';
import './home.css';
import { fsPrimaryColor } from 'src/constants/colorValues';
import { paths } from 'src/routes/routesConfig';

const style_text: React.CSSProperties = {
  position: 'absolute',
  top: '45%',
  textAlign: 'center',
  fontSize: 35,
  transform: 'translate(-50%,-50%)',
  left: 'calc(50% - 10px)',
  color: fsPrimaryColor
}

const style_icon: React.CSSProperties = {
  position: 'absolute',
  top: 'calc(45% - 50px)',
  textAlign: 'center',
  fontSize: 45,
  transform: 'translate(-50%,-50%)',
  left: 'calc(50% - 10px)',
  color: fsPrimaryColor
}

const style_links: React.CSSProperties = {
  position: 'absolute',
  top: 'calc(45% + 50px)',
  textAlign: 'center',
  fontSize: 45,
  transform: 'translate(-50%,-50%)',
  left: 'calc(50% - 10px)'
}

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <i className="fas fa-search-dollar" style={style_icon}></i>
        <div style={style_text}>
          FinoptSys
        </div>
        <div style={style_links}>
          {Object.keys(paths).map((key, index) => {
            return <a 
              key={'link'+index} 
              href={paths[key]} 
              className="btn btn-link text-capitalize" 
              role="button">{key}
            </a>;
          })}
        </div>
      </React.Fragment>
    );
  }
}
