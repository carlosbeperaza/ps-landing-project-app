import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {NgxSpinnerModule} from 'ngx-spinner';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
          breadcrumb: 'Dashboard'
        }
      }
    ],
  },
];


@NgModule({
  declarations: [DashboardComponent],
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxSpinnerModule
  ],
})
export class DashboardModule { }
