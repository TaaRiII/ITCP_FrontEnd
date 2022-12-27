import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.css']
})
export class LevelThreeComponent implements OnInit {

   
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;
  heroes = [
    { ID: 111, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
    { ID: 242, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
    { ID: 444, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
    { ID: 722, MDA: '35703', ProjectName: 'Clean Roads Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
    { ID: 744, MDA: '35703', ProjectName: 'Clean Iron Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
    { ID: 755, MDA: '35703', ProjectName: 'Mobile Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
    { ID: 766, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
    { ID: 788, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
    { ID: 898, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
    { ID: 1898, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Processing', },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
