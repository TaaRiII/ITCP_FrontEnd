import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Router } from '@angular/router';
import { Password } from 'src/app/Models/password.model';
import { ForgetService } from 'src/app/Services/forget.service';
@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent implements OnInit {
  passwords: Password = {
    password: "",
    passwordagain:"",
  };
  token:string;
  constructor(
    private forgetService: ForgetService, 
    private route: ActivatedRoute,
    private router : Router
    
    ) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.token = params['Token'];
      console.log(this.token);});
  }
  passwordrequest(){
    this.forgetService.createpassword(this.passwords, this.token)
    .subscribe({
      next: (login) => {
        console.log("End")
        console.log(login);
        this.router.navigate(['/login']);
      }
    });
  }
}
