import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import { AuthenticationService } from '../Services/authentication.service';
import { TokenStorageService } from '../Services/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {


        let authReq = request;
        const token = this.token.getToken();
        if (token != null) {
          authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
        // return next.handle(request).pipe(catchError(err => {
        //     if (err.status === 401) {
        //         // auto logout if 401 response returned from api
        //         // this.authenticationService.logout();
        //         location.reload();
        //     }

        //     const error = err.error.message || err.statusText;
        //     return throwError(() => error);
        // }))
    }
}
// export const authInterceptorProviders = [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
//   ];