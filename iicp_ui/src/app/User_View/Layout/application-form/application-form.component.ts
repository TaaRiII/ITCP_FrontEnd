import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tab,  Service } from '../../../Services/User/application-form.service';
import { TestOurCertificateComponent } from '../test-our-certificate/test-our-certificate.component';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';  
import { ProjectModel } from 'src/app/Models/application-form.model';
import { ApplicationFormService} from 'src/app/Services/Project/application-form.service'
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
  providers: [Service],
})
export class ApplicationFormComponent  {

 // @ViewChild('tab1') div;  

  // longtabs: Longtab[];
  
  // discountType:FormGroup;

  // discountTypes: DiscountType = {
  //   value:"",
  //   single:"",
  // };

//   this.discountType = new FormGroup({
//     single: new FormControl()
// });

projectModel : ProjectModel = {
  MDA: "",
  BudgetCode:"",
  MDASector: 0,
  ProjectName: "",
  ProjectObjectives: "",
  ProjectDescription: "",
  ProjectClassification: "",
}

ProjectModelApi(){
  this.applicationFormService.ProjectModelApi(this.projectModel)
  .subscribe({
    next: (ProjectModel) => {
      console.log(ProjectModel);
    }
  });
}

selectedDay: string = '';
clickMessage : string = '';

selectChangeHandler (event: any) {
  //update the ui
  this.selectedDay = event.target.value;
}

onClickMe() {
  this.clickMessage = 'You are my hero!';
}


  name = 'Angular';  
    
  productForm: FormGroup;  
     
  
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  

  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
      // price: '',  
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
  onSubmit() {  
    console.log(this.productForm.value);  
  }  
  
  tabs: Tab[];

  tabContent: string;
  // tabId:string;
  constructor(
    service: Service,
    private fb:FormBuilder,
    private applicationFormService: ApplicationFormService
    
    ) {
    // this.longtabs = service.getLongtabs();
    this.tabs = service.getTabs();
    this.tabContent = this.tabs[0].content;


     this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,  
    });
  }

  selectTab(e: { itemIndex: string | number; }) { 
    this.tabContent = this.tabs[e.itemIndex].content;
    console.log(e.itemIndex);
    this.ChangeTab(e.itemIndex);
  }



ChangeTab(tabId:number | string){
//Remove class
// debugger;
  var aTag = document.getElementsByClassName("dx-tab-selected");
  for (let i = 0; i < aTag.length; i++) {
    console.log(aTag[i]);  

    aTag[i].classList.remove("dx-tab-selected");
    //aTag[i].classList.remove("dx-state-focused");
console.log(aTag[i]);  
    //aTag[i].setAttribute("aria-selected", "false");
  }


//Add class
  var aTags = document.getElementById("tabs");
  var sds=aTags?.children[0].children[0].children[tabId];
  sds?.classList.add("dx-tab-selected");
  //sds?.classList.add("dx-state-focused");
  //sds?.setAttribute("aria-selected", "true");
}



  selectTab1() { 
    this.tabContent = this.tabs[1].content;
    this.ChangeTab(1);
    this.ProjectModelApi();
  }

  selectTab2() { 
    this.tabContent = this.tabs[2].content;
    this.ChangeTab(2);
  }

  
  selectTab3() { 
    this.tabContent = this.tabs[3].content;
    this.ChangeTab(3);
  }

  
  selectTab4() { 
    this.tabContent = this.tabs[4].content;
    this.ChangeTab(4);
  }

//   testTab(e){
// this.tabId = this.tabs[e.itemIndex].id;
// console.log(this.tabId);
//   }

  // constructor() { }

  ngOnInit(): void {
  }

}
