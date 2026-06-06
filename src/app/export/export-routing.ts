import { Route } from '@vaadin/router';
import './new-project-ai/new-project-ai';

export const routes: Route[] = [
  { path: 'new-project-ai', component: 'app-new-project-ai', name: 'NewProjectAI' },
  { path: '', redirect: 'export/new-project-ai' }
];
