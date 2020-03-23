import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Registrarte',
        }
      },
      {
        path: '',
        redirectTo: '/signin/register',
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
    CommonModule
  ],
})
export class RegisterModule { }
