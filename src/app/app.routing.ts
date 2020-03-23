import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import {content} from './shared/content-routes/content-routes';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/auth/login',
      pathMatch: 'full',
    },
    {
      path: 'errors/404',
      loadChildren: () => import('./auth/error/errors.module').then(m => m.ErrorsModule),
    },
    {
      path: 'errors/500',
      loadChildren: () => import('./auth/error/errors.module').then(m => m.ErrorsModule),
    },
    {
      path: 'auth',
      loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
    },
    {
      path: 'signin',
      loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule),
    },
     {
      path: '',
      component: DefaultLayoutComponent,
       children: content,
       canActivate: [AuthGuard]
    },
    { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
