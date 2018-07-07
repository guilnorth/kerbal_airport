import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {NbAuthService} from "@nebular/auth";
import {BASE_API} from '../app.api';


@Injectable()
export class InterceptorService implements HttpInterceptor {



  constructor(private authService: NbAuthService) { }

  /** Interceptor de request da aplicação **/
     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     * Adiciona cabeçalhos específicos caso seja uma requisição destinada ao servidor
     * **/
    if (request.url.indexOf(BASE_API) !== -1) {
      console.log(request.url)
       this.authService.getToken().subscribe((data:any) => {
         console.log(data)
         request = request.clone({
           setHeaders: {
             'Content-Type': 'Application/json',
             'Authorization': `Bearer ${data.token}`
           }
         })
      })

    }

    /** Intercept de responses **/
    return next.handle(request).do(evt => {
      if (evt instanceof HttpResponse) {
        /*if(evt.url.indexOf('auth/authenticate') !== -1){
          localStorage.setItem('authData',JSON.stringify(evt.body.user));
          console.log(evt)
        }*/

      } else {
        next.handle(request);
      }
    });

  }



}
