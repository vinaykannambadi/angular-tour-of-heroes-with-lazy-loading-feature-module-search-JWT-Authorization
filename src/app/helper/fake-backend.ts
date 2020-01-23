import { Injectable } from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent,HttpInterceptor,HTTP_INTERCEPTORS} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import {User} from './user';

const users: User[] = [{ id: 1, username: 'test', password: 'test', token: 'fakeJWT' }];


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>,next: HttpHandler ): Observable<HttpEvent<any>>{

    const { url, method, headers, body } = request;

    function handleRoute (url, method){
      switch (true){
      case url.endsWith('/auth/login') && method === 'POST':
      function authenticate(body){
       const { email, password } = body; 
       const user = users.find(x => x.username === email && x.password === password);
            if (!user){ 
            console.log('Username or password is incorrect');
            return false;
            }
            function yes(body){
                  body = {id: user.id,
                    username: user.username,
                    token: `fake-jwt-token`}
                  return of(new HttpResponse({status:200, body}));
            }
      }
      break;
      default:
      return next.handle(request);
    }
    };

    }
  }