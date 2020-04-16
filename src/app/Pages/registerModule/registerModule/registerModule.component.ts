import { Component, OnInit } from '@angular/core';
import {NgForm, Validators} from '@angular/forms';
import {SpinnerService} from '../../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../Services/auth/auth.service';
import {RegisterModule} from '../../../models/RegisterModule';
import {Router} from '@angular/router';
import {HttpService} from '../../../Services/http/http.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './registerModule.component.html'
  })

  export class RegisterComponent  {

    constructor(
        public loader: SpinnerService,
        public toaster: ToastrService,
        public authService: AuthService,
        public router: Router,
        public http: HttpService,
      ){}

      register(form: NgForm) {

        if (form.valid) {

          this.loader.show();

            const module: RegisterModule = {
                name: form.value.Name,
                description: form.value.Description,
                url: form.value.Url,
                icon: form.value.Icon,
                status: false,
                subModules: []
        
        
              };
              console.log(module);
            
            this.http.create('Module', module)
            .then((res: any) => {
              
              console.log(res);
              
                Swal.fire({
                  icon: 'success',
                  title: 'Listo',
                  text: 'Module Registrado'
                });
                form.reset();
              
            })
            .finally(() => {
            this.loader.hide();
          });
        }
      }
  }