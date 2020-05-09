import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../Services/spinner/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../Services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../Services/http/http.service';
import { SubModule } from "../../../models/SubModule";
import { Module } from "../../../models/Module";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-submodule-edit',
  templateUrl: './submodule-edit.component.html',
  styleUrls: ['./submodule-edit.component.css']
})
export class SubmoduleEditComponent implements OnInit {

  private submoduleOriginalName: string;
  private submoduleOriginalDescription: string;
  private submoduleOriginalUrl: string;
  private submoduleOriginalIcon: string;
  submoduleOriginalParent: number;
  

  submodule: SubModule;
  modules:  Array<Module>;
  parent:number;
  

  constructor(
    private _loader: SpinnerService,
    private _toaster: ToastrService,
    private _authService: AuthService,
    private _router: Router,
    private _http: HttpService,
    private _activatedRoute: ActivatedRoute

    
  ) {
     
    this._http.getAll('Module/').then((res: any) => {

      this.modules = res['Success'];
      
    });

    this._activatedRoute.params.subscribe(params => {
      console.log(params);

      this._http.getById('SubModule', params['id']).then(res => {

        this.submodule = res['Success'];
        this.submoduleOriginalName = this.submodule.name;
        this.submoduleOriginalDescription = this.submodule.description;
        this.submoduleOriginalUrl = this.submodule.url;
        this.submoduleOriginalIcon = this.submodule.icon;
        this.submoduleOriginalParent = this.submodule.parent;

        console.log(this.submodule)
      });
    });

    

    
   

   }

   
   onChange=($event :any):void=>{
    console.log($event.id);
    this.parent = $event.id;
}
  ngOnInit(): void {
    
  }
  

  test() {

    this.submodule.name = (this.submodule.name[0].toUpperCase() + this.submodule.name.slice(1)).trim();
    this.submodule.description = (this.submodule.description[0].toUpperCase() + this.submodule.description.slice(1)).trim();
    this.submodule.url = (this.submodule.url[0].toUpperCase() + this.submodule.url.slice(1)).trim();
    this.submodule.icon = (this.submodule.icon[0].toUpperCase() + this.submodule.icon.slice(1)).trim();
    this.submodule.parent=this.parent != null? this.parent:this.submoduleOriginalParent;

    console.log(this.submodule)



    this._http.update('SubModule', this.submodule).then(res  => {

      if(res['Success'] !== undefined) {
        Swal.fire({
          icon: 'success',
          title: 'Listo',
          text: 'Module Registrado'
        });


        this._router.navigateByUrl('/register-submodule/list-submodule').then();
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
