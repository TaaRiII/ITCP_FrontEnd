import { Token } from '@angular/compiler';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, observable, Observable, take } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
selector: 'app-side-bar',
templateUrl: './side-bar.component.html',
styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

UserRole: any ='';
constructor(
private _authService:AuthenticationService,public router: Router
){

}
// test() {
// this._authService.currentUser.pipe(
// map(u =>{
// debugger
// console.log("1212121");
// console.log(u);
// this.UserRole = u.user.role;
// })
// )
// }

ngOnInit() {
//this.test();
// console.log("hell11o");
// console.log(this._authService.currentUser.subscribe(m=>{m.accesstoken}));
// this._authService.currentUser.pipe(
// map(u =>{
// console.log(u.accesstoken);
// console.log("qwqwqwqw");
// }
// ))
console.log("hhhhiiiyyyyiyiyiiyyiyiyiiyyiiyiyiyyiyiiyyiiyyiyi")
console.log(this._authService.currentUserValue);

this.UserRole = this._authService.currentUserValue;
console.log("role"+this.UserRole);
//console.log();
//this._authService.current();
// this._authService.currentUser.pipe(
// map(u =>{
// debugger
// console.log("1212121");
// console.log(u);
// this.UserRole = u.user.role;
// })
// )
}
}