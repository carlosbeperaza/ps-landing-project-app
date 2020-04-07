import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PS_ENVIRONMENT } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../Services/auth/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.includes('/oauth/token')) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };

      if (this.authService.isAuthenticated()) {
        httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
      }

      const headers = httpOptions.headers;
      const request = req.clone({
        headers,
      });

      return next.handle(request).pipe(
        catchError(err => {
          if (err.status === 400) {
            this.toaster.error(
              'Usuario o Contraseña incorrectas.',
              'Datos incorrectos',
              {
                positionClass: 'toast-top-center',
                timeOut: 4000,
              }
            );
          }
          if (err.status === 406) {
            this.toaster.error(
              err.error.message,
              'Un error ocurrido',
              {
                positionClass: 'toast-top-center',
                timeOut: 4000,
              }
            );
          }
          if (err.status === 500) {
            this.toaster.error(
              'Tuvimos un error interno, intente de nuevo.',
              'Oh no! :(',
              {
                positionClass: 'toast-top-center',
                timeOut: 4000,
              }
            );
            this.authService.brokenApp();
          }
          return throwError(err);
        })
      );
    }
    else {
      return next.handle(req).pipe(
        catchError(err => {
          if (err.status === 400) {
            this.toaster.error(
              'Usuario o Contraseña incorrectas.',
              'Datos incorrectos',
              {
                positionClass: 'toast-top-center',
                timeOut: 4000,
              }
            );
          }
          if (err.status === 406) {
            this.toaster.error(
              err.error.message,
              'Un error ocurrido',
              {
                positionClass: 'toast-top-center',
                timeOut: 4000,
              }
            );
          }
          if (err.status === 500) {
            this.toaster.error(
              'Tuvimos un error interno, intente de nuevo.',
              'Oh no! :(',
              {
                positionClass: 'toast-top-center',
                timeOut: 4000,
              }
            );
            this.authService.brokenApp();
          }
          return throwError(err);
        })
      );
    }
  }
}
