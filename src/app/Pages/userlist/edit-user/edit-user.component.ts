import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import { User } from '../../../models/user';
import {NgForm, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;

  private userOriginalName: string;
  private userOriginalLastName: string;
  private userOriginalEmail: string;
  private userOriginalUsername: string;
  
  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService,
    private activatedRoute: ActivatedRoute
    ) { 
    this.activatedRoute.params.subscribe(params => {

      this.http.getById('user', params['id']).then(res => {

        this.user = res['user'];
        this.userOriginalName = this.user.name;
        this.userOriginalLastName = this.user.lastname;
        this.userOriginalEmail = this.user.email;
        this.userOriginalUsername = this.user.username;
      });
    });
  
  }

  ngOnInit(): void {
    
  }

  edit(form: NgForm) {
    if (form.valid) {
      
      this.loader.show();

      const user: User = {
        id: this.user.id,
        name: form.value.firstName,
        lastname: form.value.lastname,
        email: form.value.email,
        username: form.value.username ,
        roles: []


      };
          this.http.update('user', user)
            .then((res: any) => {
              // localStorage.setItem('user', JSON.stringify(res.data));
              if(res['success'] !== undefined) {
             Swal.fire({
              icon: 'success',
              title: 'Ready',
              text: 'User successfully edited'
            });
          }else{
            Swal.fire({
              icon: 'warning',
              title: 'Denied!',
              text: 'There´s no changes to update'
            });
          }
            form.reset();
            this.router.navigateByUrl('/userlist/userlist');
            })
            .finally(() => {
            this.loader.hide();
          });
          
      
    }
  }

}
