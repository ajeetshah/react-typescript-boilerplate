import LoginPage from 'src/pages/login/loginPage';
import TestPage from 'src/pages/test/testContainer';

export const routes: any = [
    {
        path: '/test',
        component: TestPage,
        childRoutes: []
    },
    {
        path: '/login',
        component: LoginPage,
        childRoutes: []
    }
];
