import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/Models/login.model';
import { ClientService } from 'src/app/Services/Client/client.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  LoginClient: Login = {
    name:"",
    phonenumber: "",
    email: "",
    username:"",
    password: "",
  };
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }
  ClientSignup(){
    this.clientService.ClientSignup(this.LoginClient)
    .subscribe({
      next: (login) => {
        console.log(login);
      }
    });
  }
}
