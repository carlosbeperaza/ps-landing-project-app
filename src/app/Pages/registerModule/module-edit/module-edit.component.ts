import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import { Module } from "../../../models/Module";
import { SubModule } from "../../../models/SubModule";



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

      this._http.getById('Module', params['id']).then(res => {

        this.module = res['module'];
        this.moduleOriginalName = this.module.name;
        this.moduleOriginalDescription = this.module.description;
        this.moduleOriginalUrl = this.module.url;
        this.moduleOriginalIcon = this.module.icon;
      });
    });

    this._http.getAll('SubModule/').then(res => {

      this.submodules = res['Success'];
    }).finally(() => {
      let moduleSubModules: Array<SubModule> = [];

      this.module.subModules.forEach(moduleSubModule => {

        this.submodules.forEach(submodule => {

          if(moduleSubModule.id === submodule.id) {

            moduleSubModules.push(submodule);
          }
        });
      });
      this.module.subModules = moduleSubModules;
      this.moduleOriginalSubModuleList = moduleSubModules;
    });
   }

  ngOnInit(): void {
    
  }

  // FIXME: modificaciones en el listado que resulten en el listado original debe devolver false, no true
  isSubModuleListModified(): boolean {

    return this.module.subModules !== this.moduleOriginalSubModuleList;
  }

  test() {

    if(
      (this.module.name         !== this.moduleOriginalName        ) ||
      (this.module.description  !== this.moduleOriginalDescription ) ||
      (this.module.url         !== this.moduleOriginalUrl        ) ||
      (this.module.icon  !== this.moduleOriginalIcon ) ||

      this.isSubModuleListModified()
    ) {

      let newSubModuleList: Array<SubModule> = [];

      this.module.name = (this.module.name[0].toUpperCase() + this.module.name.slice(1)).trim();
      this.module.description = (this.module.description[0].toUpperCase() + this.module.description.slice(1)).trim();
      this.module.url = (this.module.url[0].toUpperCase() + this.module.url.slice(1)).trim();
      this.module.icon = (this.module.icon[0].toUpperCase() + this.module.icon.slice(1)).trim();

      this.module.subModules.forEach(moduleSubModule => {

        this.submodules.forEach(submodule => {

          if(moduleSubModule.id === submodule.id) { newSubModuleList.push(submodule); }
        })
      })
      this.module.subModules = newSubModuleList;

      this._http.update('Module', this.module).then(res  => {

        if(res['success'] !== undefined) {
          this._toaster.success(
            'Module updated!',
            'Success',
            {
              positionClass: 'toast-top-center',
              timeOut: 4000
            }
          );
          this._router.navigateByUrl('/registerModule/list-module').then();
        }
      })
    } else {

      this._toaster.warning(
        "There's no changes to update",
        'Denied!',
        {
          positionClass: 'toast-top-center',
          timeOut: 4000
        }
      );
    }
  }

}
