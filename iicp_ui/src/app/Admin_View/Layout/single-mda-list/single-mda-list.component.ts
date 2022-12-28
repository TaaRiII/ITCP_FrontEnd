import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
} from 'devextreme-angular';
import { UserDashboardTableServiceService, Service } from '../../../Services/User/user-dashboard-table.service.service';
@Component({
  selector: 'app-single-mda-list',
  templateUrl: './single-mda-list.component.html',
  styleUrls: ['./single-mda-list.component.css']
})
export class SingleMdaListComponent{

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
