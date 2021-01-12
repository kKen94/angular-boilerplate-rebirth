import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const token = ''; // recuperare il token salvato nello storage del browser
    const authReq = !!token
      ? req.clone({
          setHeaders: { Authorization: 'Bearer ' + token },
        })
      : req;
    return next.handle(authReq);
  }
}
