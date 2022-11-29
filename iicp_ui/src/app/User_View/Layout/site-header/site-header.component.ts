import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
import { AuthenticationService } from '../../../Services/authentication.service';


@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor(
    public router: Router,
    public authenticationService : AuthenticationService
    
    ){}

  ngOnInit(): void {
  }
  logoutUser(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
