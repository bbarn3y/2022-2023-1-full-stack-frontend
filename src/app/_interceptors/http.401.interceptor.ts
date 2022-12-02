import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {UserService} from "@services/user.service";
import {Router} from "@angular/router";

@Injectable()
export class Http401Interceptor implements HttpInterceptor {

  constructor(private router: Router,
              private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(
        catchError((error: any) => {
          console.log('catchError', error);
          if (error.status === 401 && this.userService.loggedIn) {
            console.log('error: 401');
            this.userService.removeToken();
            this.router.navigateByUrl('/');
          }
          const resp = {
            status: error.status,
            msg: error.msg,
          };
          return throwError(resp);
        })
      );
  }
}
