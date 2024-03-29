import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor() // private alert: AlertService
  {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const token = this.store.pipe(select(tokenSelector)) ?? '';
    console.log('paso')
    request = request.clone({
      setHeaders: {
        'Cache-Control': 'max-age=1',
      },
    });
    return next.handle(request);
  }
}
