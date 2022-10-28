import { Component, OnInit,Input } from '@angular/core';
import {Task} from '../../Shared/Modules/task';
import {TaskService} from '../task-services/task.service';
import {OneForAll} from '../../Shared/Services/One-For-All-Service/one-for-all.service';
import {tap} from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit{
  
  Tasks:Task[];
  selectedtask: Task;
  searchText;
  addingTask = new Task();
  addedTaskID:string;
  taskEmps:number[];

  ngOnInit(): void {
   this.getTasks();
  }

  onSelect(task: Task): void {
    this.selectedtask = task;
  }

  constructor(
    private taskService:TaskService,
    private oneForAllService:OneForAll,
    ) { 
    
  }

  getTasks():void{
      this.taskService.getTaskss()
      .subscribe(tasks=>this.Tasks=tasks);
    }
    
    getDepartmentEmployees():number[]{
      this.oneForAllService.getDepartmentByID(this.addingTask.department_id)
          .subscribe(d=>this.taskEmps=d.employees); //tried making addingTask.employees directly didn't work either
          console.log('PLEASE FFS');
          return this.taskEmps;
    }

    add():void {
//sent a teams message about this, 
//it should be adding them automatically for some reason
//it doesn't seem to be adding task.employees from department_id
  
  this.taskService.addTask(this.addingTask)
      .subscribe(t=>{
        this.getTasks();
        this.resetAll();
        this.Tasks.push(t);
      });
    }

    delete(task:Task):void{
      this.Tasks=this.Tasks.filter(t=>t!==task);
      this.taskService.deleteTask(task).subscribe();
    }
    
    resetAll():void{
      
      this.addingTask.name=null;
      this.addingTask.due_date=null;
    }
}


