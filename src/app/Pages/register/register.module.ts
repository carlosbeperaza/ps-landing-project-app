import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxSpinnerModule} from 'ngx-spinner';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component:  RegisterComponent,
        data: {
          title: 'Register',
          breadcrumb: 'Dashboard'
        }
      }
    ],
  },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxSpinnerModule
  ]
})
export class RegisterModule { }
