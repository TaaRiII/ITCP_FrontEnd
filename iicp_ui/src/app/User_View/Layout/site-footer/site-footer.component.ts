import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";


@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.css']
})
export class SiteFooterComponent implements OnInit {

  constructor(public router: Router){}


  ngOnInit(): void {
  }

}
