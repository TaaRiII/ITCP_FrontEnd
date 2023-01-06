import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-committee',
  templateUrl: './admin-committee.component.html',
  styleUrls: ['./admin-committee.component.css']
})
export class AdminCommitteeComponent implements OnInit {


  
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;
  heroes = [
    { ID: 111, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
    { ID: 242, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
    { ID: 444, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
    { ID: 777, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
    { ID: 898, MDA: '35703', ProjectName: 'Clean Water Supply', Classification:'Hardware/5000 Gallon',Cost:'5000$',Durations:'15 Days',EntryUser:'Kings lao', Status:'Submited', },
  ];


  // var aTags = document.getElementById("teone");

  // $('input').on('click', function(){
  //   var valeur = 0;
  //   $('input:checked').each(function(){
  //        if ( $(this).attr('value') > valeur )
  //        {
  //            valeur =  $(this).attr('value');
  //        }
  //   });
  //   $('.progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur);    
  // });

  constructor() { }

  ngOnInit(): void {
  };

}
