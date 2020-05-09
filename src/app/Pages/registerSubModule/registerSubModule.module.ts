import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterSubmoduleComponent } from './register-submodule/register-submodule.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListSubmoduleComponent } from './list-submodule/list-submodule.component';
import { SubmoduleEditComponent } from './submodule-edit/submodule-edit.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    {
      path: '',
      children: [
        
        {
          path: 'list-submodule',
          component:  ListSubmoduleComponent,
          data: {
            title: 'SubModuleList'
          },
        },
        {
          path: 'register-submodule',
          component:  RegisterSubmoduleComponent,
          data: {
            title: 'RegisterSubModule'
            
          },     
        },
        {
          path: 'edit/:id',
          component:  SubmoduleEditComponent,
          data: {
            title: 'SubmoduleEdit'
          }
        },
        {
          path: '',
          redirectTo: 'register-submodule/register-submodule',
          pathMatch: 'full',
        },
       
      ],
    },
  ];

  @NgModule({
    declarations: [RegisterSubmoduleComponent, ListSubmoduleComponent,SubmoduleEditComponent],
    exports: [],
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      FormsModule,
      NgSelectModule,
      NgxSpinnerModule,
      ReactiveFormsModule
      
    ]
  })
  export class RegisterSubModule { }