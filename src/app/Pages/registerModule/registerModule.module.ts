import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register-module/register-module.component';
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
          path: 'register-module',
          component:  RegisterComponent,
          data: {
            title: 'Register-module'
            
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
          redirectTo: 'register-module/register-module',
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