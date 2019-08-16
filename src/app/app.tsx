import * as React from 'react';
import { Link } from 'react-router-dom'
import Routes from 'src/routes/routes';
import './app.css';
import { RouteComponentProps } from 'react-router';
import { prettyLog } from 'src/utils/logUtil';

//import '../../assets/styles/scss/site.scss';
//import logo from '../../logo.svg';

export interface Props extends RouteComponentProps<any> {
    message?: string;
    startLoader?: Function;
}

export default class App extends React.Component<Props, any>{
    componentDidMount() {
        prettyLog('FinoptSys');
        if (this.props.startLoader) {
            this.props.startLoader('started');
        }
    }

    render() {
        return (
            <div>
                {/* <div>{this.props.message}</div> */}
                {/* <Link to='/test'>test</Link> */}
                <Routes />
            </div>
        );
    }
}
