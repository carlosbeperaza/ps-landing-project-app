import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SpinnerService} from '../../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../Services/auth/auth.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../Services/http/http.service';

@Component({
  selector: 'app-rol-edit',
  templateUrl: './rol-edit.component.html',
  styleUrls: ['./rol-edit.component.css']
})
export class RolEditComponent {

  constructor( 
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService) { }

    rolEdit(form: NgForm) {
      if (form.valid) {
  
        this.loader.show();
  
        
  
      }
      
    }
}
