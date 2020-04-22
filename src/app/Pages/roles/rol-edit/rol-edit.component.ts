import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import { Role } from "../../../models/Role";
import { Module } from "../../../models/Module";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: 'app-rol-edit',
  templateUrl: './rol-edit.component.html',
  styleUrls: ['./rol-edit.component.css']
})
export class RolEditComponent implements OnInit {

  private roleOriginalName: string;
  private roleOriginalDescription: string;
  private roleOriginalModuleList: Array<Module>;
  private multiSelectSettings: IDropdownSettings;
  role: Role;
  modules: Array<Module>;

  constructor(
    private _loader: SpinnerService,
    private _toaster: ToastrService,
    private _authService: AuthService,
    private _router: Router,
    private _http: HttpService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(params => {

      this._http.getById('Role', params['id']).then(res => {

        this.role = res['role'];
        this.roleOriginalName = this.role.name;
        this.roleOriginalDescription = this.role.description;
      });
    });

    this._http.getAll('Module/').then(res => {

      this.modules = res['Success'];
    }).finally(() => {
      let roleModules: Array<Module> = [];

      this.role.modules.forEach(roleModule => {

        this.modules.forEach(module => {

          if(roleModule.id === module.id) {

            roleModules.push(module);
          }
        });
      });
      this.role.modules = roleModules;
      this.roleOriginalModuleList = roleModules;
    });
  }

  ngOnInit(): void {

    this.multiSelectSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select all',
      unSelectAllText: 'Unselect all',
      allowSearchFilter: true
    }
  }

  // FIXME: modificaciones en el listado que resulten en el listado original debe devolver false, no true
  isModuleListModified(): boolean {

    return this.role.modules !== this.roleOriginalModuleList;
  }

  test() {

    if(
      (this.role.name         !== this.roleOriginalName        ) ||
      (this.role.description  !== this.roleOriginalDescription ) ||
      this.isModuleListModified()
    ) {

      let newModuleList: Array<Module> = [];

      this.role.name = (this.role.name[0].toUpperCase() + this.role.name.slice(1)).trim();
      this.role.description = (this.role.description[0].toUpperCase() + this.role.description.slice(1)).trim();
      this.role.modules.forEach(roleModule => {

        this.modules.forEach(module => {

          if(roleModule.id === module.id) { newModuleList.push(module); }
        })
      })
      this.role.modules = newModuleList;

      this._http.update('Role', this.role).then(res  => {

        if(res['success'] !== undefined) {
          this._toaster.success(
            'Role updated!',
            'Success',
            {
              positionClass: 'toast-top-center',
              timeOut: 4000
            }
          );
          this._router.navigateByUrl('roles/list').then();
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
