import * as React from 'react';
import {RouteComponentProps} from 'react-router'

interface Props {
    data?: string;
    getData?:Function;
}

class TestPage extends React.Component<Props, any> {
    constructor(props:any, state:any) {
        super(props, state);
    }

    componentWillMount(){
        if(this.props.getData){
            this.props.getData()
        }       
    }

    render() { 
        return (
            <div>
                <div>hi there 1</div>
                <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
                <div>{this.props.data}</div>
            </div>
        );
    }
}

export default TestPage;