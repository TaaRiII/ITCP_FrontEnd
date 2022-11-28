import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/Models/login.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http : HttpClient) {}
    ClientSignup(ClientSignupRequest: Login): Observable<Login> {
        return this.http.post<Login>(this.baseApiUrl + '/Users/SignUpClient', ClientSignupRequest);
    }
}
