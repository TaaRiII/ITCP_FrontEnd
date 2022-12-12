import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Password } from '../Models/password.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ForgetService {
  baseApiUrl : string = environment.baseApiUrl;
  constructor(private http : HttpClient) { }
  forget(email:string | null): Observable<any> {
    console.log("Forget");
    console.log(email);
    return this.http.post<any>(`${environment.baseApiUrl}/Users/ForgetClient?email=`+email,httpOptions);
}
createpassword(requirPassword: Password, Token): Observable<any> {
  console.log("password");
  console.log(requirPassword);
  return this.http.post<any>(`${environment.baseApiUrl}/Users/PasswordChange?Token=`+Token,requirPassword,httpOptions);
}
}
