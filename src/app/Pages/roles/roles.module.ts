import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component:  RolesComponent,
        data: {
          title: 'List Users'
        },
      },
      {
        path: '',
        redirectTo: 'roles-list/list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [RolesComponent],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class RolesModule { }
