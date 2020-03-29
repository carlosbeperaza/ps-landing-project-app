import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponentComponent } from './forgot-component/forgot-component.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgotPassword',
        component: ForgotComponentComponent,
        data: {
          title: 'Recuest Password',
        }
      },
      {
        path: '',
        redirectTo: '/recover/forgotPassword',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [ForgotComponentComponent],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
})
export class ForgotPasswordModule { }
