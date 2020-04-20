import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import {User} from '../../../models/user';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent  {

  private user: Array<User>;

  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService,
    ) { 
      this.http.getAll().then((res: any) => {

        this.user = res['Success'];
        console.log(this.user)
      })
    }

     

  

 

  /*getUsers(){
    this.http.getAll('user/')
            .then((res: any) => {
             //localStorage.setItem('user', JSON.stringify(res.data));
              // this.router.navigateByUrl('/dashboard/home');
              var a = JSON.stringify(res.data);
              
              this.userlist = [];

                 res.forEach( ( x) => {
                   this.userlist.push( x )
                   console.log(this.userlist)});

                      
                          
             })
            .finally(() => {
            this.loader.hide();
          });
  }*/
}
