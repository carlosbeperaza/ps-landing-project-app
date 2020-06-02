import { Component, OnInit } from '@angular/core';
import {NgForm, Validators, FormGroup, FormBuilder, FormArray, FormControl} from '@angular/forms';
import {SpinnerService} from '../../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../Services/auth/auth.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../Services/http/http.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { SubModule } from '../../../models/SubModule';
import { Module } from '../../../models/Module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-submodule',
  templateUrl: './register-submodule.component.html',
  styleUrls: ['./register-submodule.component.css']
})
export class RegisterSubmoduleComponent implements OnInit {

  modules:  Array<Module>;
  parent:number;
  
  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
    public router: Router,
    public http: HttpService) 
    {
      this.http.getAll('Module/').then((res: any) => {

        this.modules = res['Success'];
      });
     
     }

  ngOnInit(): void {
    
    
  }
  onChange=($event :any):void=>{
      console.log($event.id);
      this.parent = $event.id;
  }
  

  register(form: NgForm ) {
    console.log('metodo');

    if (form.valid) {
      
      this.loader.show();

      const submodule: SubModule = {
        name: form.value.name,
        description: form.value.description,
        parent:this.parent,
        url: form.value.url,
        icon: form.value.icon,
        status: true,
      };
      console.log(submodule);

      this.http.create('SubModule', submodule)
            .then((res: any) => {
              
              console.log(res);
              
                Swal.fire({
                  icon: 'success',
                  title: 'Listo',
                  text: 'Module Registrado',
                });
                form.reset();
                this.router.navigateByUrl('/register-submodule/list-submodule').then();
            })
            .finally(() => {
            this.loader.hide();
          });

    }else{
      this.toaster.warning(
        "Llene todos los campos",
        'Denied!',
        {
          positionClass: 'toast-top-center',
          timeOut: 4000
        }
      );
      
    }
    
    }
  }

 
 


