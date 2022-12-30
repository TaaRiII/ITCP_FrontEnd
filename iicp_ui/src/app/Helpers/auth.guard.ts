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
      take(1),
      map(u =>{
        //console.log("Hi");
        //console.log(user);
        // return res ? true : false;
        console.log("test");
        let roles = route.data['roles'];
        console.log(roles);
        console.log(u);
        console.log(u.role);
        console.log(u.name);
        if(u.role === roles){
          //console.log("if are working")
          return true;
        }
if(roles === 2){
  return this.route.createUrlTree(['/login']);
}
return this.route.createUrlTree(['/admin-login']);
        //console.log("if not working")
        
      })
    )
  }
}