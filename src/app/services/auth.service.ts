import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import {tap} from 'rxjs/operators';
import {User} from '../user';

@Injectable()
export class AuthService {
private userSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
  constructor(private httpClient: HttpClient) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.userSubject.asObservable();
  }

  login(email:string, password:string) {
    return this.httpClient.post<any>('http://www.your-server.com/auth/login', {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
}))
}
}