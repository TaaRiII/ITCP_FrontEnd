import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/Models/login.model';
import { ForgetService } from 'src/app/Services/forget.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  foget: Login = {
    email: "",
  };
  constructor(private forgetService: ForgetService) { }

  ngOnInit(): void {
  }
  forget(){
    console.log("Start");
    this.forgetService.forget(this.foget.email)
    .subscribe({
      next: (login) => {
        console.log("End")
        console.log(login);
      }
    });
  }
}
