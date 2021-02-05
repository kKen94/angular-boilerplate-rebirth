import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SweetHelper } from '@utils';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private keycloakAngular: KeycloakService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        SweetHelper.fireToast(err.message, 'error');

        if (err.status === 401) {
          return from(this.keycloakAngular.logout()).pipe(
            switchMap(() => throwError(err.message)),
          );
        }

        return throwError(err.message);
      }),
    );
  }
}
