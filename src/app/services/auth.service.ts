import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import {User} from '../user';

@Injectable()
export class AuthService {
private userSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
  constructor(private httpClient: HttpClient) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.userSubject.asObservable();
  }

  public get currentUserValue(): User {
        return this.userSubject.value;
  }

  login(email:string, password:string) {
    return this.httpClient.post<any>('http://www.your-server.com/auth/login', {email, password}).pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }
}
