import { Injectable } from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent,HttpInterceptor,HTTP_INTERCEPTORS} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import {User} from './user';

const users: User[] = [{ id: 1, username: 'test', password: 'test', token: 'fakeJWT' }];


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>,next: HttpHandler ): Observable<HttpEvent<any>>{

    const { url, method, headers, body } = request;

    return this.handleRoute (request.url, request.method, request.body, request, next);

    
  }
  handleRoute(url, method, body, request, next){
    switch (true){
      case url.endsWith('/auth/login') && method === 'POST':
      return this.authenticate(body);
      break;
      default:
       return next.handle(request);
    }
  }
  authenticate(body){
      const { email, password } = body;
            const user = users.find(x => x.username === email && x.password === password);
            if (!user){ 
            console.log('Username or password is incorrect');
            return false;
            }
              this.yes({
                    id: user.id,
                    username: user.username,
                    token: `fake-jwt-token`
                });


  }
  yes(body){
      return of(new HttpResponse({status: 200, body}));
  }
}