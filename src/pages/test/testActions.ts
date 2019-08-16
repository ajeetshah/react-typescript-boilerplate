import { createFetchActions } from 'src/services/createActions';
import { get } from 'src/services/createAPICall';

export const REST_CALL = createFetchActions('REST_CALL');

export function getData() {
    return get(REST_CALL, 'https://jsonplaceholder.typicode.com/todos/1');
}
