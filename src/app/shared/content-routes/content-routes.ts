import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../../pages/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'roles',
    loadChildren: () => import('../../pages/roles/roles.module').then(m => m.RolesModule)
  }
  /*
  {
    path: 'buttons',
    loadChildren: () => import('../../views/buttons/buttons.module').then(m => m.ButtonsModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('../../views/notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path: 'theme',
    loadChildren: () => import('../../views/theme/theme.module').then(m => m.ThemeModule)
  }*/
];
