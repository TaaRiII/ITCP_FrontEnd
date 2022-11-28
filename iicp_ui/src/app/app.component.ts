import { NgPlural } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './Services/authentication.service';
import { user } from './Models/user.model';
import {TokenStorageService} from '../app/Services/token-storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'FullStack.UI';
  //status: boolean = this.tokenStorage.getToken() != null ? true : false;
  currentUser: user;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private tokenStorage: TokenStorageService
) {
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);  
}

}

// logout() {
//   this.authenticationService.logout();
//   this.router.navigate(['/login']);
// }
