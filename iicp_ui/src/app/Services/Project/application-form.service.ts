import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectModel } from 'src/app/Models/application-form.model';
@Injectable({
providedIn: 'root'
})
export class ApplicationFormService {
baseApiUrl : string = environment.baseApiUrl;

constructor(private http : HttpClient) {}
ProjectModelApi(ProjectModelRequest: ProjectModel): Observable<ProjectModel> {
return this.http.post<ProjectModel>(this.baseApiUrl + '/Project/AddUpdateProject', ProjectModelRequest);
}
ProjectScopeApi(ProjectModelRequest: ProjectModel): Observable<ProjectModel> {
    return this.http.post<ProjectModel>(this.baseApiUrl + '/Project/AddUpdateProjectScope', ProjectModelRequest);
    }
}
