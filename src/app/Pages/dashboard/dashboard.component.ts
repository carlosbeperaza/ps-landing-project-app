import { Component, OnInit } from '@angular/core';
import {SpinnerService} from '../../Services/spinner/spinner.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../Services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(
    public loader: SpinnerService,
    public toaster: ToastrService,
    public authService: AuthService,
  ) {
    if (!localStorage.getItem('welcome')) {
      this.toaster.success(`Hola ${authService.getUserFullName()}! Bienvenido.`, '', {
        positionClass: 'toast-top-center',
        timeOut: 2500,
      });
      localStorage.setItem('welcome', 'done');
    }
  }

  ngOnInit(): void {
    this.loader.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.loader.hide();
    }, 1000);
  }

}
