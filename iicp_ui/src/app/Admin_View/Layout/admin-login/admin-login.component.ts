import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isThisTypeNode } from 'typescript';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
import { user} from '../../../Models/user.model'

import { AuthenticationService } from '../../../Services/authentication.service';
import { TokenStorageService } from '../../../Services/token-storage.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  User: user = {
    name:"",
    phonenumber: "",
    email: "",
    username:"",
    password: "",
    role:0
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {

   //redirect to home if already logged in
  //   if (this.authenticationService.currentUser) { 
  //     this.router.navigate(['/']);
  // }
   }
   
   
  //  ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //       username: ['', Validators.required],
  //       password: ['', Validators.required]
  //   });

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authenticationService.login(this.User.username, this.User.password)    
    .subscribe({
      next: (_token) => {
                console.log("hest");
                console.log(_token);
                this.tokenStorage.saveToken(_token.accesstoken);
                this.tokenStorage.saveUser(_token.user);

                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;
                // this.reloadPage();
                this.router.navigate(['/dashboard']);
                // window.location.reload();
      }
    });
    //return this.router.navigate(['/dashboard']);
    // .subscribe(
    
    //   data => {
    //     console.log("testtt");
    //     console.log(data);
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.reloadPage();
    //   },
      
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }

}
