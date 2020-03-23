import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SpinnerService} from '../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../Services/auth/auth.service';
import {UserLogin} from '../../models/UserLogin';
import {Router} from '@angular/router';
import {HttpService} from '../../Services/http/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService,
  ) {
    if (this.authService.isAuthenticated()) {
      this.toaster.warning(
        'Primero, Cierra sesión.',
        'Ups!',
        {
          positionClass: 'toast-top-center',
          timeOut: 3000,
        }
      );
      this.router.navigateByUrl('/dashboard/home');
    }
  }

  login(form: NgForm) {
    if (form.valid) {

      this.loader.show();

      const user: UserLogin = {
        username: form.value.username,
        password: form.value.password
      };

      this.authService.login('login', user).subscribe(
        (response: any) => {
          localStorage.setItem('access_token', response.access_token);
          this.http.getById('user', response.user)
            .then((res: any) => {
              localStorage.setItem('user', JSON.stringify(res.data));
              this.router.navigateByUrl('/dashboard/home');
            })
            .catch(() => {
              this.authService.brokenApp();
            })
            .finally(() => {
            this.loader.hide();
          });
        },
        (response: any) => {
          this.loader.hide();
        }
      );
    }
  }
}
