import TestPage from '../components/testPage/containers/testContainer';
import TodoPage from '../components/todo/containers/todoContainer';
import LoginPage from '../components/loginPage/components/loginComponents';

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
    },
    {
        path: '/login',
        component: LoginPage,
        childRoutes: []
    }
];
