import { Injectable } from '@angular/core';

import {Event} from '../../Modules/events';
import {Task} from '../../Modules/task';
import {TaskService} from '../../../AllTasks/task-services/task.service';

import {Employee} from '../../Modules/Employee';
import {EmployeService} from '../../../AllEmployees/employees-services/employe.service';

import { DepartmentService } from '../../../AllDepartments/department-services/department.service';
import { Department } from '../../Modules/department';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable, of} from 'rxjs';
import {map,filter, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OneForAll {
  
  dates:Event[]=[];

  

  private tasksUrl = 'http://i875395.hera.fhict.nl/api/3774201/task';
  
  private departmentUrl='http://i875395.hera.fhict.nl/api/3774201/department';
  private employeesUrl='http://i875395.hera.fhict.nl/api/3774201/employee';

  constructor(
    private departmentService:DepartmentService,
    private taskService:TaskService,
    private employeeService:EmployeService,
    private http: HttpClient,
    ) 
    { }

  httpOptions ={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }

  getDepartmentByID(id:number):Observable<Department>{
    const url = `${this.departmentUrl}?id=${id}`;
    return this.http.get<Department>(url);
  }

  getEmployeeByID(id:number):Observable<Employee>{
    const url = `${this.employeesUrl}?id=${id}`;
    return this.http.get<Employee>(url);
  }
  getAllTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getEvents(tasks:any[]):void{
    for (let index = 0; index < tasks.length; index++) {
      let n=tasks[index].name;
      let d=tasks[index].due_date;
      this.dates.push(new Event(n,d));
    }
    
  }
  
  
}