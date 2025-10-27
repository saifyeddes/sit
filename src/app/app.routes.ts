import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'pages/sit-test',
    pathMatch: 'full',
  },
  {
  path: 'sit-test',
  loadChildren: () => import('./pages/sit-test/sit-test.page').then(m => m.SitTestPageModule)
  }

];
