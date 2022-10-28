import { Component, OnInit } from '@angular/core';

import dayGridView from '@fullcalendar/daygrid';
import {EventInput, Calendar} from '@fullcalendar/core';
import {TaskService} from '../../AllTasks/task-services/task.service';
import {OneForAll} from '../Services/One-For-All-Service/one-for-all.service';
import { Task } from '../Modules/task';
import {Event} from '../Modules/events'


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  calendarPlugins=[dayGridView];

  //event= new Event();
    
  calendarEvents:any[]=[];
    

  private Tasks;
  
  
  constructor(
    private oneForAll:OneForAll,
    private taskService:TaskService,
  ) { }

  ngOnInit(): void {
    //this.getTasks();
    //this.getEvents();
    //this.addTasks();
    //this.secondMethod();
    this.oneForAll.getAllTasks().subscribe(t=>{this.Tasks=t;this.calendarEvents=[];this.getEvents()});
  }

//  addTasks():void{
//     var length; 
//for some reason I am getting an error that this.tasks is underfined but It is getting tasks correctly
//    for (let index = 0; index <= this.Tasks.length; index++) {
//      
//      this.event.title=this.Tasks[index].name;
//    this.event.date=this.Tasks[index].due_date;
//tried something i read online since .push returns an int but didnt work
//      length=this.calendarEvents.push(this.event);
//      console.log(this.event.title);
//    }
//  }

  getTasks():void{
    this.oneForAll.getAllTasks()
        .subscribe(tasks=>this.Tasks=tasks);
        console.log("yes");
  }

  getEvents(){
    this.oneForAll.getEvents(this.Tasks);
    this.calendarEvents=this.oneForAll.dates;
    this.oneForAll.dates=[];
    console.log(this.calendarEvents);
  }

//gonna keep a log of useless methods that i'm trying, will delete
//  secondMethod(){
//    this.oneForAll.getAllTasks()
//        .subscribe(tasks=>
//          tasks.forEach(task => {
//            var temp = new Array(tasks.length);
//            this.event.title=task.name;
//           // this.event.date=task.due_date;
//            console.log(task.id +'added');
//            temp.push(this.event);
//            this.calendarEvents=temp;
//          })
//        )
//  }
}
