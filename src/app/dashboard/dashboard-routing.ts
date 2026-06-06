import { Route } from '@vaadin/router';
import './dashboard-content/dashboard-content';

export const routes: Route[] = [
  { path: 'dashboard-content', component: 'app-dashboard-content', name: 'Dashboard Content' },
  { path: '', redirect: 'dashboard/dashboard-content' }
];
