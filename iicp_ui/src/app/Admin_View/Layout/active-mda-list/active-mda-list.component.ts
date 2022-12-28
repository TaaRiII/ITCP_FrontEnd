import { Component, OnInit } from '@angular/core';
import { GeneralInformation } from 'src/app/Models/generalInfo.model';
import { GeneralInformationService } from 'src/app/Services/general-information.service';

@Component({
  selector: 'app-active-mda-list',
  templateUrl: './active-mda-list.component.html',
  styleUrls: ['./active-mda-list.component.css']
})
export class ActiveMdaListComponent implements OnInit {

  GeneralInformationData: GeneralInformation = {
    url:"",
    primaryContactPersonName: "",
    primaryContactPersonMobile: 0,
    telPhone:0,
    coporateHeadQuater: "",
    state:0,
    officeLocation:"",
    rcNumber:0,
    nameOfCEO:""
  };
  // constructor() { }

  constructor(private generalInformationService: GeneralInformationService) { }

  ngOnInit() : void {
    
      // console.log(this.step1.nativeElement.innerHTML);
  }
  GeneralInfo(){
    this.generalInformationService.GeneralInfo(this.GeneralInformationData)
    .subscribe({
      next: (GeneralInformation) => {
        console.log(GeneralInformation);
        
      }
    });
  }

}
