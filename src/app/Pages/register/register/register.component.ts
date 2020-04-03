import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SpinnerService} from '../../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../Services/auth/auth.service';
import {Register} from '../../../models/Register';
import {Router} from '@angular/router';
import {HttpService} from '../../../Services/http/http.service';

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

 register(form: NgForm) {
    if (form.valid) {

      this.loader.show();

      const user: Register = {
        name: form.value.firstName,
        lastname: form.value.lastName,
        email: form.value.email,
        password: form.value.password,
        username: form.value.username,
        status: false,
        roles: []

    };
          this.http.create('user', user)
            .then((res: any) => {
              // localStorage.setItem('user', JSON.stringify(res.data));
              // this.router.navigateByUrl('/dashboard/home');
            })
            .finally(() => {
            this.loader.hide();
          });

    }
  }
}
