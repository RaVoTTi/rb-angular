import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private alert: AlertService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((res: HttpErrorResponse) => {
        let errorMessage: string;
        console.log(res.status);
        switch (res.status) {
          case 0:
            errorMessage = 'No internet connection';
            break;
          default:
            errorMessage = 'Server Error';
        }

        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
        // this.alert.fire(
        //   {
        //     title: errorMessage,
        //     text: 'Or try later',
        //     icon: 'error',
        //   },
        //   {
        //     urlConfi: '/app/books', // 🔴 TODOOO
        //     urlCancel: '/app/books',
        //   }
        // );
        return throwError(() => Error(errorMessage));
      })
    );
  }
}
