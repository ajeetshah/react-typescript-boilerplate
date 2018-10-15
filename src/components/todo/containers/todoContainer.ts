import { connect } from 'react-redux'
import TodoPage from '../components/todoComponent'
import { stateInterface } from '../../../store/appReducer';
import { getData } from '../actions/todoAction';

const mapStateToProps = (state:stateInterface) => {
  return {
    data: (state.testPage) ? state.testPage.title : null
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return { 
    getData:()=>{
      return dispatch(getData())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoPage)
