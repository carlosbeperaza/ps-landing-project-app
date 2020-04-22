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
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  roles:  Array<Role>;

  constructor(
    private _loader: SpinnerService,
    private _toaster: ToastrService,
    private _authService: AuthService,
    private _router: Router,
    private _http: HttpService
  ) {

    this._http.getAll('Role/').then((res: any) => {

      this.roles = res['roles'];
    });
  }

  toEditComponent(id: number) { this._router.navigateByUrl(`/roles/edit/${id}`).then(r => {}); }

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

        this._http.delete('Role', role.id).then(res => {

          if(res['success'] !== undefined) {

            this._toaster.success(
              'Role disabled.',
              'Disabled!',
              {
                positionClass: 'toast-top-center',
                timeOut: 4000
              }
            );
            role.status = false;
          }
        });
      }
    });
  }

  enable(role: Role) {

    this._http.update('Role', {
      id: role.id,
      status: true
    }).then(res => {

      if(res['success'] !== undefined) {

        this._toaster.success(
          'Role enabled.',
          'Enabled!',
          {
            positionClass: 'toast-top-center',
            timeOut: 4000
          }
        );
        role.status = true;
        role.lastUpdateDate = new Date();
      }
    })
  }
}
