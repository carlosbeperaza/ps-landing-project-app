import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import { Module } from "../../../models/Module";
import { SubModule } from "../../../models/SubModule";
import Swal from 'sweetalert2';



@Component({
  selector: 'app-module-edit',
  templateUrl: './module-edit.component.html',
  styleUrls: ['./module-edit.component.css']
})
export class ModuleEditComponent implements OnInit {

  private moduleOriginalName: string;
  private moduleOriginalDescription: string;
  private moduleOriginalUrl: string;
  private moduleOriginalIcon: string;
  private moduleOriginalSubModuleList: Array<SubModule>;
  
  module: Module;
  submodules: Array<SubModule>;

  constructor(
    private _loader: SpinnerService,
    private _toaster: ToastrService,
    private _authService: AuthService,
    private _router: Router,
    private _http: HttpService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(params => {
      console.log(params);

      this._http.getById('Module', params['id']).then(res => {

        this.module = res['Success'];
        this.moduleOriginalName = this.module.name;
        this.moduleOriginalDescription = this.module.description;
        this.moduleOriginalUrl = this.module.url;
        this.moduleOriginalIcon = this.module.icon;
      });
    });

   
   }

  ngOnInit(): void {
    
  }

  // FIXME: modificaciones en el listado que resulten en el listado original debe devolver false, no true
  

  test() {

      this.module.name = (this.module.name[0].toUpperCase() + this.module.name.slice(1)).trim();
      this.module.description = (this.module.description[0].toUpperCase() + this.module.description.slice(1)).trim();
      this.module.url = (this.module.url[0].toUpperCase() + this.module.url.slice(1)).trim();
      this.module.icon = (this.module.icon[0].toUpperCase() + this.module.icon.slice(1)).trim();

      this._http.update('Module', this.module).then(res  => {

        if(res['Success'] !== undefined) {
          Swal.fire({
            icon: 'success',
            title: 'Listo',
            text: 'Module Registrado'
          });


          this._router.navigateByUrl('/register-module/list-module').then();
        }else {

          this._toaster.warning(
            "There's no changes to update",
            'Denied!',
            {
              positionClass: 'toast-top-center',
              timeOut: 4000
            }
          );
        }
      })
  }
  }


