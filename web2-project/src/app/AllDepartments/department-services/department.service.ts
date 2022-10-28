import { Injectable } from '@angular/core';
import { Department } from '../../Shared/Modules/department';
import { Observable, of, throwError } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

 

  constructor(private http: HttpClient) { }  //Injecting HTTP service to communicate with the data


  private depturl = 'http://i875395.hera.fhict.nl/api/3774201/department';                 // Our created Data can be accessed here at api/departments
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };


  
  
  getDepartmentsDB(): Observable<Department[]> {
    return this.http.get<Department[]>(this.depturl);
  }

  getDepartmentByID (id: number): Observable<Department> {
    const url = `${this.depturl}/${id}`;
    return this.http.get<Department>(url)
    }

  addDepartment (newDepartment: Department): Observable<Department> {
      return this.http.post<Department>(this.depturl, newDepartment, this.httpOptions)
    }

  deleteDepartment(department: Department): Observable<Department> {
    const url = `${this.depturl}/${department}`;
    return this.http.delete<Department>(url, this.httpOptions)
      
    
  }
  updateDepartment(selDepartment: Department): Observable<Department>{
    const url = `${this.depturl}/${selDepartment.id}`;
    return this.http.put<Department>(url, selDepartment, this.httpOptions)
   
  }

  searchDepts(term: string): Observable<Department[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Department[]>(`${this.depturl}/?name=${term}`).pipe(
      tap(x => x.length));
  }

}
