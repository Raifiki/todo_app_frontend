import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const TOKEN = localStorage.getItem('token');
      if (TOKEN) {
        req = req.clone({
          setHeaders:{Authorization: 'Token ' + TOKEN}
        })
      }

      return next.handle(req).pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigateByUrl('/login');
            }
          }
          return throwError(() => err)
        })
      );
  }



}
