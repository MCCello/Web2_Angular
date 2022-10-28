import {Task} from '../../Shared/Modules/task';

import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import{Observable, of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
constructor(
    private http: HttpClient) { }

  private tasksUrl = 'http://i875395.hera.fhict.nl/api/3774201/task';

  httpOptions ={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };

  getTaskss():Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTask(id:number):Observable<Task>{
    const url = `${this.tasksUrl}?id=${id}`;
    return this.http.get<Task>(url);
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.tasksUrl,task,this.httpOptions);
  }
 
  deleteTask(task:Task | number): Observable<Task>{
    const id = typeof task === 'number' ? task : task.id;
    const url = `${this.tasksUrl}?id=${id}`;

    return this.http.delete<Task>(url,this.httpOptions);
  }

  updateTask(task:Task):Observable<Task>{
    const url = `${this.tasksUrl}?id=${task.id}`;
    return this.http.put<Task>(url,task,this.httpOptions);
  }
}
