import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from '../toastr/toastr.service';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 500) {
          this.toastr.mostrarToaster(
            'danger',
            'Erro ao processar sua requisição'
          );
        }

        if (error.status === 400) {
          this.toastr.mostrarToaster('warning', error.error || error.message);
          return of([]);
        }

        if (error.status === 404) {
          return of([]);
        }

        return throwError(error.message);
      })
    );
  }
}
