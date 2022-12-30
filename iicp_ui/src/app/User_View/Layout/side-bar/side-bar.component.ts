import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  UserRole: any;
  constructor(private _authService:AuthenticationService,public router: Router){
    this._authService.currentUser.pipe(
      map(u =>{
        console.log("hello");
        console.log(u);
        this.UserRole = u.user.role;
      })
    )
  }
}
