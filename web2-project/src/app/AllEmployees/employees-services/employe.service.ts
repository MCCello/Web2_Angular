import { Injectable } from '@angular/core';
import {Employee} from '../../Shared/Modules/Employee';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError, of, from} from 'rxjs';
import {Department} from '../../Shared/Modules/department';

import { resetFakeAsyncZone } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
 

 constructor(private http : HttpClient) { 
 }
//HTTP OPTIONS
  httpOpts= {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };


//API URL
 private empUrl = 'http://i875395.hera.fhict.nl/api/3774201/employee'; 
 private depUrl = 'http://i875395.hera.fhict.nl/api/3774201/department'


 // Returns The list of Observable Employee Array from empUrl (address of API server (week3))
 getemploys(): Observable<Employee[]>{   
   return this.http.get<Employee[]>(this.empUrl);
  }
  

  //GET EMPLOYEE BY ID
  getEmployee(id:number) : Observable<Employee>{
    const url = `${this.empUrl}/${id}`;
    return this.http.get<Employee>(url);
  }
  //Get DEPARTMENT BY NAME
  getDepartment(id:any):Observable<Department>{
    const url = `${this.depUrl}?id=${id}`;
    return this.http.get<Department>(url);
  }


//UPDATE EMPLOYEE FIRST NAME
  updateEmp(employee:Employee):Observable<Employee>{
    const url = `${this.empUrl}?id=${employee.id}`;
    return this.http.put<Employee>(url,employee,this.httpOpts);
  }

//DELEEEEEEETE
  deleteEmp(employee:Employee):Observable<Employee>{
    const url = `${this.empUrl}?id=${employee.id}`;
    return this.http.delete<Employee>(url,this.httpOpts);
  }
  
//AAAAAADDDDDDD an EMPLOYEE
    addEmp(employe:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.empUrl,employe,this.httpOpts);
  }  

  }

