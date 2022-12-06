import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralInformation } from 'src/app/Models/generalInfo.model';



@Injectable({
  providedIn: 'root'
})
export class GeneralInformationService {
  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  GeneralInfo(GeneralInfoRequest: GeneralInformation): Observable<GeneralInformation> {
    return this.http.post<GeneralInformation>(this.baseApiUrl + '/Application/AddUpdateGenCompInfo', GeneralInfoRequest);
}
}
