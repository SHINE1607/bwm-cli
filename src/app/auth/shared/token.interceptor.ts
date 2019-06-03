import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}
    //inteptor function that we calling befotre we are sending it to the next handler 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.auth.getAuthToken();
      
      //checking if the token exists 
      if (token){
        request = request.clone({
  
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
           });
      
      }
    //exectuting the consecutoive function usiong next function
    return next.handle(request);
  } 
}
