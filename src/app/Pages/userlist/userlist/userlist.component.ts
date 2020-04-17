import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import {Userlist} from '../../../models/userlist';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService,
    ) { }

     userlist: Userlist[];

  ngOnInit(): void {
    
  }

 

 
}
