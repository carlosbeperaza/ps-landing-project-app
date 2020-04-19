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
    private http: HttpService) {

    this.http.getRoles().then((res: any) => {

      this.roles = res['roles'];
    });
  }

    confirmEdit() {
      Swal.fire({
        title: 'Are you sure?',
        text: "is about to make a change!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then((result) => {
        if (result.value) {
          this.router.navigateByUrl('/roles-edit/edit').then(r => {});
        }
      })
    }

    confirmDelete() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }

}




