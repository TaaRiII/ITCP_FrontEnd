import { Component, OnInit } from '@angular/core';
import { Employee} from 'src/app/Models/employee.model'
import { EmployeesService } from 'src/app/Services/employees.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
 
  employees: Employee[]=[
    // {
    //   id:'1',
    //   name: 'Abbas',
    //   email: 'test@gamil.com',
    //   phone: 3227409382,
    //   salary: 50000,
    //   department: 'Software',
    // },
    // {
    //   id:'2',
    //   name: 'Ali',
    //   email: 'test@gamil.com',
    //   phone: 3227409382,
    //   salary: 50000,
    //   department: 'Software',
    // },
    // {
    //   id:'3',
    //   name: 'Tahir',
    //   email: 'test@gamil.com',
    //   phone: 3227409382,
    //   salary: 50000,
    //   department: 'Software',
    // },
  ];
  constructor(private employeesService : EmployeesService) { }
  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next : (employees) => {
       this.employees = employees;
      //  console.log(employees)
      },
     error : (response)=> {
  console.log(response);
}
    })
  }

}
