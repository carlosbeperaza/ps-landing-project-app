import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'userlist',
        component:  UserlistComponent,
        data: {
          title: 'UserList'
        },     
      },
      {
        path: '',
        redirectTo: 'userlist/userlist',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [UserlistComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class UserlistModule { }
