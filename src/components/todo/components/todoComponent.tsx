import * as React from 'react';
import {RouteComponentProps} from 'react-router'

interface Props {
    data?: string;
    getData?:Function;
}

class TodoPage extends React.Component<Props, any> {
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
                <div>Todo:</div>
                <div>{this.props.data}</div>
            </div>
        );
    }
}

export default TodoPage;
