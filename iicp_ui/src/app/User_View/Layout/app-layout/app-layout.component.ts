import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


export * from '../site-header/site-header.component';
export * from '../site-footer/site-footer.component';
export * from '../side-bar/side-bar.component';
// export * from '../site-footer/site-footer.component';
