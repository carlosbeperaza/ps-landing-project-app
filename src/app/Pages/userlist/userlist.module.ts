import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EditUserComponent } from './edit-user/edit-user.component';

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
        path: 'edit/:id',
        component:  EditUserComponent,
        data: {
          title: 'Edit User'
        }
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
  declarations: [UserlistComponent, EditUserComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class UserlistModule { }
