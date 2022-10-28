import { Component, OnInit,Input } from '@angular/core';
import {Location} from '@angular/common';


import {Task} from '../../Shared/Modules/task';
import {TaskService} from '../task-services/task.service';


import {OneForAll} from '../../Shared/Services/One-For-All-Service/one-for-all.service';






@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['../tasks/tasks.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task:Task;
  
  constructor(
    private taskService:TaskService,
    private oneForAll:OneForAll,
    private location:Location,
    ) { }

    employeesInTask:any[];

    depName:string;

    updatingTask:Task;

    

  ngOnInit(): void {
    
  }

  goBack():void{
    this.location.back();
  }

  assignDepartment(id:number) 
  { 
    this.task.department_id=id;
  }
  assignEmployee(id:number,)
  {
    this.task.employees.push(id);
  }

  getTaskDepartmentName(depID:any):void{
    this.oneForAll.getDepartmentByID(depID)
        .subscribe(d=>this.depName=d.name)
  }

  
  

  update(){
    this.updatingTask=this.task;
    this.taskService.updateTask(this.updatingTask)
        .subscribe(t=>this.updatingTask=t);
  }
  
  
}
