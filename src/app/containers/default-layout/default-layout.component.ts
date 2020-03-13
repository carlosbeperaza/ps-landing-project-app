import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private router:Router){}


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  showModal() {
    Swal.fire({
      title: 'Quieres cerrar Sesión?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesión!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Cerraste Sesión!',
          'Saliendo.',
          'success'
          )
          this.router.navigateByUrl('/');
      }
    });
    }
}