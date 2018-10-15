import TestPage from '../components/testPage/containers/testContainer';
import TodoPage from '../components/todo/containers/todoContainer';

export const routes: any = [
    {
        path: '/test',
        component: TestPage,
        childRoutes: []
    },
    {
        path: '/todo',
        component: TodoPage,
        childRoutes: []
    }
];
