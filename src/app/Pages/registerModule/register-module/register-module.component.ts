import { Component, OnInit } from '@angular/core';
import {NgForm, Validators, FormGroup, FormBuilder, FormArray, FormControl} from '@angular/forms';
import {SpinnerService} from '../../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../Services/auth/auth.service';
import {Module} from '../../../models/Module';
import {Router} from '@angular/router';
import {HttpService} from '../../../Services/http/http.service';
import Swal from 'sweetalert2';
import { SubModule } from '../../../models/SubModule';

@Component({
    selector: 'app-register',
    templateUrl: './register-module.component.html'
    
  })

  export class RegisterComponent implements OnInit {
    
    public ArraysubModules:SubModule[];
    
    registerForm:FormGroup;
    

    constructor(
        public loader: SpinnerService,
        public toaster: ToastrService,
        public authService: AuthService,
        public router: Router,
        public http: HttpService,
        public formBuilder: FormBuilder
      ){}
      ngOnInit() {
        this.registerForm = this.formBuilder.group({

          name:[''],
          description:[''],
          url:[''],
          icon:[''],
          submodules:this.formBuilder.array([])
    
        });
      } 
      
      register() {

        if(this.registerForm.valid){
          const module:Module = Object.assign({},this.registerForm.value);
         this.ArraysubModules = Object.assign({},this.subModules.value);
        
        const Module:Module ={
          name:module.name,
          description:module.description,
          icon:module.icon,
          status:true,
          url:module.url,
          subModules:[],
          
        }
        console.log(Module);
        
        for (let numero in this.ArraysubModules){
          console.log(this.ArraysubModules[numero]);
          Module.subModules.push(this.ArraysubModules[numero]);
        }
          
        
       
        
          this.loader.show();

            
             // console.log(module);
            
            this.http.create('Module', Module)
            .then((res: any) => {
              
              console.log(res);
              
                Swal.fire({
                  icon: 'success',
                  title: 'Listo',
                  text: 'Module Registrado',
                });
               this.registerForm.reset();
               this.subModules.clear();
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

     
      get subModules(){
        return this.registerForm.get('submodules') as FormArray
      }

      agregarSubModule(){
        //let subModuleArr  = this.registerForm.get('submodules') as FormArray;
        let subModuleFG = this.construirSubModule();
        this.subModules.push(subModuleFG);
      }

      construirSubModule(){
        return this.formBuilder.group({

          name: '',
          description: '',
          url: '',
          icon: '',
          status:true,
        });
        
      }

      removerSubModule(indice:number){
        this.subModules.removeAt(indice)
      }
    
    
    
      
  }