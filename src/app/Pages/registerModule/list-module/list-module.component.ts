import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import { Module } from "../../../models/Module";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent {

  modules:  Array<Module>;

  constructor(
    private _loader: SpinnerService,
    private _toaster: ToastrService,
    private _authService: AuthService,
    private _router: Router,
    private _http: HttpService
  ) {

    this._http.getAll('Module/').then((res: any) => {

      this.modules = res['Success'];
      console.log(this.modules);
    });
  }

  toEditComponent(id: number) { this._router.navigateByUrl(`/registerModule/edit/${id}`).then(r => {}); }

  confirmDisable(module: Module) {
    

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

        this._http.delete('Module', module.id).then(res => {

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
        module.status = false;
      }
    
    });
  }

  enable(module: Module) {
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
        this._http.update('Module', {
          id: module.id,
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
            module.status = true;
            module.lastUpdateDate = new Date();
          }
        });

      }});
   

    
  }

}
