import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './registerModule/registerModule.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListModuleComponent } from './list-module/list-module.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    {
      path: '',
      children: [
        
        {
          path: 'list-module',
          component:  ListModuleComponent,
          data: {
            title: 'ModuleList'
          },
        },
        {
          path: 'registerModule',
          component:  RegisterComponent,
          data: {
            title: 'RegisterModule'
            
          },     
        },
        {
          path: 'edit/:id',
          component:  ModuleEditComponent,
          data: {
            title: 'ModuleEdit'
          }
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
    declarations: [RegisterComponent, ListModuleComponent,ModuleEditComponent, ListModuleComponent ],
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