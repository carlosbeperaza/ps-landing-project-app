import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component:  RegisterComponent,
        data: {
          title: 'Register'
        },     
      },
      {
        path: '',
        redirectTo: 'register/register',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [RegisterComponent],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class RegisterModule { }
