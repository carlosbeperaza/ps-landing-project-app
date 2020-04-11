import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../../Services/http/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-password',
  templateUrl: 'new-password.component.html'
})
export class NewPasswordComponent {

  private userId: string;
  private formerPass: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _toaster: ToastrService,
    private _http: HttpService,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.userId = atob(params['userId']);
      this.formerPass = atob(params['formerPass']);
    });
  }

  resetPass(pass: string, confirmPass: string) {
    if (pass === confirmPass) {
      this._http.resetPass(btoa(this.userId), btoa(pass), btoa(this.formerPass)).then((res: any) => {
        /* this._toaster.info(
          res['message'],
          'Operación completada',
          {
            positionClass: 'toast-top-center',
            timeOut: 4000
          }
        ); */
        Swal.fire({
          icon: 'success',
          title: 'Listo',
          text: 'Contraseña restablecida, ya puede ingresar'
        });
        this._router.navigateByUrl('/dashboard/home').then(r => {});
      });
    } else {
      /* this._toaster.warning(
        'Las contraseñas no coinciden',
        'Datos incorrectos',
        {
          positionClass: 'toast-top-center',
          timeOut: 4000
        }
      ); */
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coincide, vuelva a intentarlo'
      });
    }
  }
}