import { connect } from 'react-redux';
import { stateInterface } from 'src/store/appReducer';
import { startLoader, stopLoader } from './appAction';
import { withRouter } from 'react-router-dom'
import App from './app';

const mapStateToProps = (state: stateInterface) => {
  return {
    message: state.loader ? state.loader.message : null
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    startLoader: (message) => {
      return dispatch(startLoader(message))
    }
    // stopLoader:()=>{
    //   return dispatch(stopLoader())  
    // }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
