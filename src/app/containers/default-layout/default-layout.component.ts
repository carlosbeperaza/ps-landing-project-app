import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {AuthService} from '../../Services/auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(
    public router: Router,
    public authService: AuthService,
    ) {}


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logOut() {
    Swal.fire({
      title: '¿Seguro que te vas?',
      text: 'Estás a punto de abandonar tu sesión.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesión!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.authService.removeAuth();
        this.router.navigateByUrl('/');
      }
    });
    }
}
