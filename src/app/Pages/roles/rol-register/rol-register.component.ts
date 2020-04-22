import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SpinnerService} from '../../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../Services/auth/auth.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../Services/http/http.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Role } from '../../../models/Role';
import { Module } from '../../../models/Module';

@Component({
  selector: 'app-rol-register',
  templateUrl: './rol-register.component.html'
})
export class RolRegisterComponent {

  modules:  Array<Module>;
  

  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService) {
      
      this.http.getAll('Module/').then((res: any) => {

        this.modules = res['Success'];
      });
     }

    rolRegister(form: NgForm) {
      if (form.valid) {
        this.loader.show();
        let modulosAceptados: Array<Module> = [];

        for (let i = 0 ; i < form.value.module.length; i++) {
          const Mod: Module = {
            name: form.value.module[i]
          };
          modulosAceptados.push(Mod);
        } 
        console.log(modulosAceptados);

        const Role: Role = {
          name: form.value.name,
          description: form.value.description,
          modules: modulosAceptados
        };


        this.http.create('Role', Role)
            .then((res: any) => {
              this.router.navigateByUrl('/roles');
            })
            .finally(() => {
            this.loader.hide();
          });
      }

    }
}
