import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import {User} from '../../../models/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent  {

  users: Array<User>;

  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService,
    ) {
      this.http.getAll('user/').then((res: any) => {

        this.users = res['users'];
        console.log(this.users);
      });
    }

    toEditComponent(id: number) {
       this.router.navigateByUrl(`/userlist/edit/${id}`).then(r => {}); }

    toChangePass(username:string,email:string) {
      Swal.fire({

        title: 'Change password?',
        text: 'You are about to send an email to change your password',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {

          this.loader.show();
          const targetUser: User = {
            username: btoa(username),
            email: btoa(email)
          };
    
          this.http.emailPass(targetUser).then((res: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Ready',
              text: 'An email has been sent to the user to update their password'
            });
          })
          .finally(() => {
            this.loader.hide();
          });
          
        }
      });
      

       }

  confirmDisable(user: User) {

    Swal.fire({

      title: 'Disable user?',
      text: 'You´r about to disable this user',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {

        this.http.delete('user', user.id).then(res => {

          if(res['success'] !== undefined) {

            Swal.fire(
              'Disabled!',
              'This user has been disabled.',
              'success'
            ).then(r => { });
            user.status = false;
          } else if(res['message'] !== undefined) {

            Swal.fire(
              'Ups!',
              res['message'],
              'warning'
            ).then(r => { });
          } else if(res['error'] !== undefined) {

            Swal.fire(
              'Error!',
              res['error'],
              'error'
            ).then(r => { });
          }
        });
      }
    });
  }

  enable(user: User) {

    this.http.update('user', {
      id: user.id,
      status: true
    }).then(res => {

      if(res['success'] !== undefined) {

        Swal.fire(
          'Enabled!',
          'This user has been enabled.',
          'success'
        ).then(r => { });
        user.status = true;
        user.updateDate = new Date();
      } else if(res['message'] !== undefined) {

        Swal.fire(
          'Ups!',
          res['message'],
          'warning'
        ).then(r => { });
      } else if(res['error'] !== undefined) {

        Swal.fire(
          'Error!',
          res['error'],
          'error'
        ).then(r => { });
      }
    })
  }

}
