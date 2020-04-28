import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './registerModule/registerModule.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'registerModule',
          component:  RegisterComponent,
          data: {
            title: 'RegisterModule'
            
          },     
        },
        {
          path: '',
          redirectTo: 'registerModule/registerModule',
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
      NgxSpinnerModule,
      ReactiveFormsModule
    ]
  })
  export class RegisterModule { }