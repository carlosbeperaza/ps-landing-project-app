import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {P404Component} from './404.component';
import {P500Component} from './500.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: P404Component,
        data: {
          title: 'Pagina no encontrada',
        }
      },
      {
        path: '500',
        component: P500Component,
        data: {
          title: 'Error en el servidor',
        }
      },
    ],
  },
];

@NgModule({
  declarations: [P404Component, P500Component],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
})
export class ErrorsModule { }
