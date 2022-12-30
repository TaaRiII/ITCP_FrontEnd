import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:AuthenticationService, private route : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.currentUser.pipe(
      map(u =>{
        //console.log("Hi");
        //console.log(user);
        // return res ? true : false;
        console.log("test");
        let roles = route.data['roles'];
        //var aa = this.keyValue.transform(u.role);
        //console.log(aa);
        console.log(roles);
        console.log(u);
        console.log(u.user.role);
        if(u.user.role === roles){
          console.log("if are working")
          return true;
        }
// if(roles === 2){
//   console.log("Login");
//   return this.route.createUrlTree(['/login']);
// }
// console.log("Admin-login");
// return this.route.createUrlTree(['/admin-login']);
        //console.log("if not working")
        return this.route.createUrlTree(['/login']);
      })
    )
  }
}