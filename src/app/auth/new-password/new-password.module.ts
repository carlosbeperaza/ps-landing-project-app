import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPasswordComponent } from './new-password/new-password.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'newPassword/:userId/:formerPass',
        component: NewPasswordComponent,
        data: {
          title: 'Change Password',
        }
      },
      {
        path: '',
        redirectTo: '/change/newPassword',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [NewPasswordComponent],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
})
export class NewPasswordModule { }
