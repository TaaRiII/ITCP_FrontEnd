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
      map(user =>{
        //console.log("Hi");
        //console.log(user);
        // return res ? true : false;
        if(user){
          //console.log("if are working")
          return true;
        }
        //console.log("if not working")
        return this.route.createUrlTree(['/login']);
      })
    )
  }
}