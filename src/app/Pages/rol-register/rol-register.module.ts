import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolRegisterComponent } from './rol-register/rol-register.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component:  RolRegisterComponent,
        data: {
          title: 'Register'
        },
      },
      {
        path: '',
        redirectTo: 'roles-register/register',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [RolRegisterComponent],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class RolRegisterModule { }
