import { REST_CALL } from '../actions/testAction';

export function TestReducer(state = {}, action) {
    switch (action.type) {
        case REST_CALL.succeeded:
            // return {
            //     ...state,
            //     data:action.response.data
            // }
            return action.response.data;
    }
    return state;
}
