import { Component, OnInit ,AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit  {

  // constructor(nativeElement:T) { }
  // constructor() { }

  // ngOnInit(): void {
  // }
  @ViewChild('step1') step1: ElementRef;

  ngAfterViewInit() {
      console.log(this.step1.nativeElement.innerHTML);
  }

}
