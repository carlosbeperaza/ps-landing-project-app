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
    path: 'roles-register',
    loadChildren: () => import('../../pages/rol-register/rol-register.module').then(m => m.RolRegisterModule),
  },
  {
    path: 'roles-list',
    loadChildren: () => import('../../pages/rol-list/rol-list.module').then(m => m.RolListModule)
  },
  {
    path: 'roles-edit',
    loadChildren: () => import('../../pages/rol-edit/rol-edit.module').then(m => m.RolEditModule)
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
