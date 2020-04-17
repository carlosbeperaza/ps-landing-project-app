import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolListComponent } from './rol-list/rol-list.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component:  RolListComponent,
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
  declarations: [RolListComponent],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class RolListModule { }
