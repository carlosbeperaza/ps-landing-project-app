import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { RolRegisterComponent } from './rol-register/rol-register.component';
import { RolEditComponent } from './rol-edit/rol-edit.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component:  RolesComponent,
        data: {
          title: 'List Users'
        },
      },
      {
        path: 'register',
        component:  RolRegisterComponent,
        data: {
          title: 'Register'
        },
      },
      {
        path: 'edit/:id',
        component:  RolEditComponent,
        data: {
          title: 'Edit User'
        }
      }
    ],
  },
];

@NgModule({
  declarations: [RolesComponent, RolRegisterComponent, RolEditComponent],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class RolesModule { }
