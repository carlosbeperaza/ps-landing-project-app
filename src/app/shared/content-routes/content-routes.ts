import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'register-module',
    
    loadChildren: () => import('../../Pages/registerModule/registerModule.module').then(m => m.RegisterModule),
  },
  {
    path: 'register-submodule',
    
    loadChildren: () => import('../../Pages/registerSubModule/registerSubModule.module').then(m => m.RegisterSubModule),
  },
  
  /*{
    path: 'base',
    loadChildren: () => import('../../views/base/base.module').then(m => m.BaseModule)
  },
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
