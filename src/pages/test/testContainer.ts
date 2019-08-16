import { connect } from 'react-redux'
import { stateInterface } from 'src/store/appReducer';
import { getData } from './testActions';
import TestPage from './testPage';

const mapStateToProps = (state: stateInterface) => {
  return {
    data: (state.testPage) ? state.testPage.title : null
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: () => {
      return dispatch(getData())
    }
  }
}
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TestPage);
