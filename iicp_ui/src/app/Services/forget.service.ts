import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
