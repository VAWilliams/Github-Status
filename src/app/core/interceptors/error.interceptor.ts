import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
      .pipe(catchError((response: HttpErrorResponse) => {

        if (response.error instanceof ErrorEvent) return EMPTY; // TODO: Client Error
        if (response.status !== HttpStatusCode.NotFound) return EMPTY; // TODO: Status Edge Cases
        
        this.router.navigate(['not-found']);

        return EMPTY;
      }));
  }
}
