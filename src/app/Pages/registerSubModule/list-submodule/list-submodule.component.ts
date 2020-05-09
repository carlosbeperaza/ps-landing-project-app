import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import { SubModule } from "../../../models/SubModule";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-submodule',
  templateUrl: './list-submodule.component.html',
  styleUrls: ['./list-submodule.component.css']
})
export class ListSubmoduleComponent {

  submodules:  Array<SubModule>;

  constructor(
    private _loader: SpinnerService,
    private _toaster: ToastrService,
    private _authService: AuthService,
    private _router: Router,
    private _http: HttpService
  ) {

    this._http.getAll('SubModule/').then((res: any) => {

      this.submodules = res['Success'];
      console.log(this.submodules);
    });
  }

  toEditComponent(id: number) { this._router.navigateByUrl(`/register-submodule/edit/${id}`).then(r => {}); }

  confirmDisable(submodule: SubModule) {
    

    Swal.fire({

      title: 'Disable module?',
      text: 'You´r about to disable this module',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then(
      (result) => {
      if (result.value) {

        this._http.delete('SubModule', submodule.id).then(res => {

          if(res['success'] !== undefined) {

            this._toaster.success(
              'Module disabled.',
              'Disabled!',
              {
                positionClass: 'toast-top-center',
                timeOut: 4000
              }
            );
           
          }
        });
        submodule.status = false;
      }
    
    });
  }

  enable(submodule: SubModule) {
    Swal.fire({

      title: 'Disable module?',
      text: 'You´r about to disable this module',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this._http.update('SubModule', {
          id: submodule.id,
          status: true,
        }).then(res => {
         
    
          if(res['Success'] !== undefined) {
            console.log(res);
            
            this._toaster.success(
              'Module enabled.',
              'Enabled!',
              {
                positionClass: 'toast-top-center',
                timeOut: 4000
              }
            );
            submodule.status = true;
            submodule.lastUpdateDate = new Date();
          }
        });

      }});
   

    
  }

}
