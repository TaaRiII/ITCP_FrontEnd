import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';  


@Component({
  selector: 'app-add-credential-user',
  templateUrl: './add-credential-user.component.html',
  styleUrls: ['./add-credential-user.component.css']
})
export class AddCredentialUserComponent implements OnInit {

  constructor(private fb:FormBuilder,) { }

  // productForm: FormGroup;  
  // quantities() : FormArray {  
  //   return this.productForm.get("quantities") as FormArray  
  // } 
  // newQuantity(): FormGroup {  
  //   return this.fb.group({  
  //     qty: '',  
  //     // price: '',  
  //   })  
  // }  
  // addQuantity() {  
  //   this.quantities().push(this.newQuantity());  
  // }  
  // removeQuantity(i:number) {  
  //   this.quantities().removeAt(i);  
  // }  
  
  // onSubmit() {  
  //   console.log(this.productForm.value);  
  // }  

  // newDivs: addDivisions[] = [];
  // addNewDiv() {
  //   this.newDivs.push(new addDivisions())
  //   }
 
  //2
  // add(){
  //   let row = document.createElement('div');  
  //     row.className = 'row';
  //     row.innerHTML = `
  //     <br>
  //     <input class="form-control" formControlName="qty" id="projectObjectives" id=""  placeholder="">`;
  //    document?.querySelector('.showInputField')?.appendChild(row);
  // }
//3

fieldArray: Array<any> = [];
newAttribute: any = {};

addFieldValue() {
  this.fieldArray.push(this.newAttribute)
  this.newAttribute = {};

  console.log(this.fieldArray);
}

deleteFieldValue(index) {
  this.fieldArray.splice(index, 1);
}


  selectedDay: string = '';

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }

  ngOnInit(): void {
  }

}
// export class addDivisions {

// }
