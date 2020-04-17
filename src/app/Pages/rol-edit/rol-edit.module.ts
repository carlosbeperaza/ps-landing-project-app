import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolEditComponent } from './rol-edit/rol-edit.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'edit',
        component:  RolEditComponent,
        data: {
          title: 'Edit User'
        },
      },
      {
        path: '',
        redirectTo: 'roles-edit/edit',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [RolEditComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class RolEditModule { }
