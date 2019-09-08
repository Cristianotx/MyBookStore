import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  toasterChange = new Subject<any>();

  mostrarToaster(type, msg) {
    this.toasterChange.next({ type, msg, id: null });
  }
}
