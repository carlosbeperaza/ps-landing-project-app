import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import { Role } from "../../../models/role";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html',
  styleUrls: ['./rol-list.component.css']
})
export class RolListComponent {

  roles:  Array<Role>;

  constructor(
    private loader: SpinnerService,
    private toaster: ToastrService,
    private authService: AuthService,
    private router: Router,
    private http: HttpService
  ) {

    this.http.getRoles().then((res: any) => {

      this.roles = res['roles'];
    });
  }

    toEditComponent() { this.router.navigateByUrl('/roles-edit/edit').then(r => {}); }

    confirmDisable(role: Role) {

      Swal.fire({

        title: 'Disable role?',
        text: 'You´r about to disable this role',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {

          this.http.disableRole(role.id).then(res => {

            if(res['success'] !== undefined) {

              Swal.fire(
                'Disabled!',
                'This role has been disabled.',
                'success'
              ).then(r => { });
              role.status = false;
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

}