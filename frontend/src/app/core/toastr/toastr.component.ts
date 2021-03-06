import { Component, OnInit } from '@angular/core';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  dismissible = true;
  alerts: any[] = [];

  constructor(private toastrService: ToastrService) {
    this.toastrService.toasterChange.subscribe((toaster) => {
      const id = this.newGUID();
      toaster.id = id;
      this.alerts.push(toaster);
      setTimeout(() => {
        this.close(toaster);
      }, 3000);
    });
  }

  close(dismissedAlert: any): void {
    const alerts = this.alerts.filter((x) => x.id !== dismissedAlert.id);
    this.alerts = [...alerts];
  }

  private newGUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (c) => {
        // tslint:disable-next-line: no-bitwise
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        // tslint:disable-next-line:no-bitwise
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }
}
