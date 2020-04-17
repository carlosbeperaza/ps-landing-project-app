import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SpinnerService} from '../../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../Services/auth/auth.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../Services/http/http.service';
import {rolRegister} from '../../../models/rolRegister';

@Component({
  selector: 'app-rol-register',
  templateUrl: './rol-register.component.html'
})
export class RolRegisterComponent {

  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService) { }

    rolRegister(form: NgForm) {
      if (form.valid) {
  
        this.loader.show();
  
        
  
      }
      
    }
}
