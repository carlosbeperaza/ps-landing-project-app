import { Component, OnInit } from '@angular/core';
import {NgForm, Validators} from '@angular/forms';
import {SpinnerService} from '../../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../Services/auth/auth.service';
import {Register} from '../../../models/Register';
import { TargetUser } from '../../../models/targetUser';
import {Router} from '@angular/router';
import {HttpService} from '../../../Services/http/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent  {

 
  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService,
  ) { }

   compararPasswords(control: NgForm){
    const password = control.value.password;
    const repetir_password = control.value.repetPassword;

    let error = null;


    //si no coinciden return el error 
    if (password != repetir_password) {
        error = {...error, error:'Las contraseñas no coinciden'}
    }

    return error;

  }
  
  
  validacionPassword(form: NgForm){
    if(form.value.password==form.value.repetPassword)
      return true;
    else
      return false;
  }
  
 register(form: NgForm) {
    if (form.valid) {
      
      this.loader.show();

      const user: Register = {
        name: form.value.firstName,
        lastname: form.value.lastName,
        email: form.value.email,
        password: form.value.password,
        username: form.value.username ,
        status: false,
        roles: []


      };
      const targetUser: TargetUser = {
        username: btoa(form.value.username),
        email: btoa(form.value.email)
      };

          this.http.create('user', user)
            .then((res: any) => {
              // localStorage.setItem('user', JSON.stringify(res.data));
              // this.router.navigateByUrl('/dashboard/home');
              this.http.emailPass(targetUser).then((res: any) => {
                Swal.fire({
                  icon: 'success',
                  title: 'Listo',
                  text: 'Usuario Registrado, se le ha enviado un email'
                });
                form.reset();
              })
            })
            .finally(() => {
            this.loader.hide();
          });
          
    
    } 
  }
}
