import { Route } from '@vaadin/router';
import './landing-page-content/landing-page-content';
import './register-page/register-page';
import './login-page/login-page';

export const routes: Route[] = [
  { path: 'login-page', component: 'app-login-page', name: 'Login Page' },
  { path: 'register-page', component: 'app-register-page', name: 'Register Page' },
  { path: 'landing-page-content', component: 'app-landing-page-content', name: 'Landing Page Content' },
  { path: '', redirect: 'landing-page/landing-page-content' }
];
