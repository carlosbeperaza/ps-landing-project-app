import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  constructor(private spinner: NgxSpinnerService) {}

  show() {
    this.spinner.show('global', {
      type: 'line-scale-pulse-out',
      size: 'medium',
      color: '#0071c4',
    });
  }

  hide() {
    this.spinner.hide('global');
  }
}
