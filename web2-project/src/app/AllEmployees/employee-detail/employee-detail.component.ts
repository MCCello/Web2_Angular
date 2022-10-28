import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Employee} from '../../Shared/Modules/Employee';
import {EmployeService} from '../employees-services/employe.service';
import {Location} from '@angular/common';
import { Department } from '../../Shared/Modules/department';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
@Input() employee: Employee;
@Output() deleteEmp:EventEmitter<Employee>=new EventEmitter();


constructor(private empService : EmployeService,public location: Location) { }

department:Department;
dep_name:string;
updateEmp:Employee;

ngOnInit(): void {
  this.getDepName(this.employee.department_id);
  }

  goBack():void{
    this.location.back();
  }

  save():void {
    this.updateEmp=this.employee;
    this.empService.updateEmp(this.employee).subscribe();
  }

  onDelete(employee:Employee){
    this.deleteEmp.emit(employee);
  }


  getDepName(nr : any){
    this.empService.getDepartment(nr).subscribe(depart=>this.department=depart);
  }



}
