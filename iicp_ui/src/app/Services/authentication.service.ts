import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Token } from '../Models/token.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Token>;
    public currentUser: Observable<Token>;

    constructor(private http: HttpClient) {
         this.currentUserSubject = new BehaviorSubject<Token>(localStorage.getItem('currentUser') ?JSON.parse(localStorage.getItem('currentUser') || '{}'):null);
         this.currentUser = this.currentUserSubject.asObservable();
    }

    // public get currentUserValue(): user {
    //     return this.currentUserSubject.value;
    // } 

    login(username: string | null, password : string | null): Observable<any> {
        // console.log("testing");
        //console.log(user);
        return this.http.post<any>(`${environment.baseApiUrl}/Users/LoginClient`, { username : username,password:password } , httpOptions)
            .pipe(map(user => {
            //     //store user details and jwt token in local storage to keep user logged in between page refreshes
                 localStorage.setItem('currentUser', JSON.stringify(user));
                console.log('currentUser');
                this.currentUserSubject.next(user);
                return user;
            }));
    }
    admin_login(username: string | null, password : string | null): Observable<any> {
        // console.log("testing");
        //console.log(user);
        return this.http.post<any>(`${environment.baseApiUrl}/Users/LoginUser`, { username : username,password:password } , httpOptions)
            .pipe(map(user => {
            //     //store user details and jwt token in local storage to keep user logged in between page refreshes
                 localStorage.setItem('currentUser', JSON.stringify(user));
                console.log('currentUser');
                this.currentUserSubject.next(user);
                return user;
            }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('auth-user');
        sessionStorage.removeItem('auth-token');
        // this.currentUserSubject.next(null!);
    }
}