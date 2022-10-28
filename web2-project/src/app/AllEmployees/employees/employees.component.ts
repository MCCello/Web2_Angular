import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../../Shared/Modules/Employee';
import {EmployeService} from '../employees-services/employe.service';
import {OneForAll} from '../../Shared/Services/One-For-All-Service/one-for-all.service';
import { stringify } from 'querystring';
import { Department } from 'src/app/Shared/Modules/department';
import { SymbolFormatFlags } from 'typescript';
import {map} from 'rxjs/operators';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

employeess : Employee[];      //Variable to stock array of employees
selectedemployee : Employee;  //Variable For selected Employee
emp = new Employee();
empName :string;
assignedEmp:Employee[];
department:Department;
dep_name:string;
searchText;

constructor(
  private empService : EmployeService ) {} 

ngOnInit(){ 
    this.getEmployees();
          }

  
//If an employee is selected in the actual web page 
onSelect(employee : Employee): void {
  this.selectedemployee = employee;  //Selected employee
  
}
//GET OBSERVABLES OF EMPLOYEES
getEmployees():void { //Get employees through an API HTTP request
  this.empService.getemploys().subscribe(employeess =>this.employeess = employeess);
}

//DELETE EMPLOYEE
deleteEmp(employee:Employee)
{
  this.employeess=this.employeess.filter(t=>t.id !== employee.id);
  this.empService.deleteEmp(employee).subscribe(() => console.log("user deleted"));
  
}

//Adds Employee
addEmployee():void{
  this.empService.addEmp(this.emp).subscribe
  (emp=>{this.getEmployees();
        this.reset();
        this.empName=emp.first_name; })
}


private reset(){
  this.emp.id=null;
  this.emp.first_name=null;
  this.emp.last_name=null;
  this.emp.birth_date=null;
  this.emp.department_id=null;
}


}
