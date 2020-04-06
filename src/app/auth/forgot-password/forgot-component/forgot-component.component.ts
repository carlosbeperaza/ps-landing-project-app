import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth/auth.service';
import { HttpService } from '../../../Services/http/http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InterceptorService } from '../../../interceptors/auth.interceptor';
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-forgot-component',
  templateUrl: 'forgot-component.component.html'
})
export class ForgotComponentComponent {

  constructor(
    public authService: AuthService,
    public router: Router,
    public toaster: ToastrService,
    public http: HttpService,
    private _interceptor: InterceptorService,
  ) { }

  forgot(form: NgForm) {
    if (form.valid){
      // Enviar los headers de 'email' y 'username'
      this._interceptor.setAdditionalHeaders(new HttpHeaders({
        'username': btoa(form.value.username),
        'email': btoa(form.value.email)
      }));
      this.http.forgot()
        .then((res: any) => {
          localStorage.setItem('forgot', JSON.stringify(res.data));
          this.router.navigateByUrl('/dashboard/home');
        })
        .catch(() => {
          this.authService.brokenApp();
        });
    }
  }
}
