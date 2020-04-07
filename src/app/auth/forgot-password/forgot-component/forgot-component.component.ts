import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth/auth.service';
import { HttpService } from '../../../Services/http/http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TargetUser } from '../../../models/targetUser';

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
  ) { }

  forgot(form: NgForm) {
     const targetUser: TargetUser = {
       username: btoa(form.value.username),
       email: btoa(form.value.email)
     }
    if (form.valid){
      this.http.forgot(targetUser).then((res: any) => {
        localStorage.setItem('forgot', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard/home');
      }).catch(() => {
        this.authService.brokenApp();
      });
    }
  }
}
