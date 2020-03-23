import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PS_ENVIRONMENT} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(public http: HttpClient, public router: Router) {
  }

  login(url: string, user: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': PS_ENVIRONMENT.LOCAL.CREDENTIALS
      })
    };

    const params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', user.username);
    params.set('password', user.password);

    return this.http.post<any>(PS_ENVIRONMENT.LOCAL.URL_LOGIN, params.toString(), httpOptions);
  }
  isAuthenticated() {
    const token = localStorage.getItem('access_token');
    return token && token.length > 0 ;
  }
  getToken() {
    return localStorage.getItem('access_token') ;
  }
  removeAuth() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('welcome');
    localStorage.removeItem('user');
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user')) ;
  }
  brokenApp() {
    this.removeAuth();
    this.router.navigateByUrl('/');
  }
  getUserFullName() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? `${user.name} ${user.lastname}` : '';
  }


  



}
