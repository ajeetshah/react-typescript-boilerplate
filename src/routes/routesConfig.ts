import LoginPage from 'src/pages/login/loginPage';
import TestPage from 'src/pages/test/testContainer';
import HomePage from 'src/pages/home/homePage';

export const routes: any = [
    {
        path: '/',
        component: HomePage,
        childRoutes: []
    },
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
