import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth/auth.service';
import { HttpService } from '../../../Services/http/http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { User } from '../../../models/user';

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
     const targetUser: User = {
       username: btoa(form.value.username),
       email: btoa(form.value.email)
     };
    if (form.valid) {
      this.http.forgot(targetUser).then((res: any) => {
        localStorage.setItem('forgot', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard/home');
        Swal.fire({
          icon: 'success',
          title: 'Listo',
          text: 'Hemos enviado un correo a su Email, por favor verifíquelo',
          footer: '<a href>¿Aún no te llega el correo?</a>'
        });
      }).catch(() => {
        this.authService.brokenApp();
      });
    }
  }
}
