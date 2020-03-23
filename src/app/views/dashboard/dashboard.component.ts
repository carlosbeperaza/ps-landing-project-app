import { Component, OnInit } from '@angular/core';
import {SpinnerService} from '../../Services/spinner/spinner.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(public loader: SpinnerService) {

  }

  ngOnInit() {
    this.loader.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.loader.hide();
    }, 500);
  }
}
