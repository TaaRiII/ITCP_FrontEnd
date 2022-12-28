import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-mda-list',
  templateUrl: './certificate-mda-list.component.html',
  styleUrls: ['./certificate-mda-list.component.css']
})
export class CertificateMdaListComponent {

  title = 'Angular Search Using ng2-search-filter';
  searchText:any;
  heroes = [
    { ID: 111, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
    { ID: 242, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
    { ID: 444, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
    { ID: 777, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
    { ID: 898, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
  ];
  constructor() {
    
  }
}
