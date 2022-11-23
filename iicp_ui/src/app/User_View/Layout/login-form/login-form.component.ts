import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
import { user} from '../../../Models/user.model'

import { AuthenticationService } from '../../../Services/authentication.service';
import { TokenStorageService } from '../../../Services/token-storage.service';

// import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
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
    private tokenStorage: TokenStorageService
  ) {

    // redirect to home if already logged in
  //   if (this.authenticationService.currentUserValue) { 
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

      }
    });
    
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

  reloadPage() {
    window.location.reload();
  }
}


    // get return url from route parameters or default to '/'
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
// }
 // convenience getter for easy access to form fields
//  get f() { return this.loginForm.controls; }

//  onSubmit() {
//   this.submitted = true;

//   // stop here if form is invalid
//   if (this.loginForm.invalid) {
//       return;
//   }

//   // this.loading = true;
//   this.authenticationService.login(this.f['username'].value, this.f['password'].value)
//       .pipe(first())
//       .subscribe(
//           data => {
//               this.router.navigate([this.returnUrl]);
//           },
//           error => {
//               this.error = error;
//               // this.loading = false;
//           });
// }


// }
