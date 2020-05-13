import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SpinnerService} from '../../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../Services/auth/auth.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../Services/http/http.service';
import { Role } from '../../../models/Role';
import { Module } from '../../../models/Module';

@Component({
  selector: 'app-rol-register',
  templateUrl: './rol-register.component.html'
})
export class RolRegisterComponent {

  private modules:  Array<Module>;
  modulesList:    Array<Module> = [];

  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService) {
      /* this.http.getRoles().then((res: any) => {

        this.modules = res['modules'];
        this.modules.forEach(module => {
          if (module.status) {
            this.modulesList.push(module);
          }
        });
      }); */
     }

    rolRegister(form: NgForm) {
      if (form.valid) {
        this.loader.show();

        const Role: Role = {
          name: form.value.name,
          description: form.value.description,
          modules: [{name:"test", subModule:[]}]
        };

        this.http.create('Role', Role)
            .then((res: any) => {
              this.router.navigateByUrl('/roles-list/list');
            })
            .finally(() => {
            this.loader.hide();
          });
      }

    }
}
