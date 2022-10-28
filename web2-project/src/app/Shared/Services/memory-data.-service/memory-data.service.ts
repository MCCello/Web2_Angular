import { Injectable } from '@angular/core';
import {Task} from '../../Modules/task';
import {Employee} from '../../Modules/Employee';
import {Department} from '../../Modules/department';


import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MemoryDataService implements InMemoryDbService {

  createDb(){
  let TASKS = [
      {id:1,title: 'this is 1',date:'2020-03-31',department:null,employees:[]},
      {id:2,title: 'this is 2',date:'2020-03-24',department:null,employees:[]},
      {id:3,title: 'this is 3',date:'2020-03-17',department:null,employees:[]},
      {id:4,title: 'this is 4',date:'2020-03-10',department:null,employees:[]},
      {id:5,title: 'this is 5',date:'2020-03-03',department:null,employees:[]},
      {id:6,title: 'this is 6',date:'2020-03-01',department:null,employees:[]} 
  ];
    let EMPLOYEES = [
      {id:1,firstname: 'Will', lastname :'Be', Age: 21,department:null},
      {id:2,firstname: 'Meek', lastname :'Rage', Age: 235,department:null},
      {id:3,firstname: 'Trav', lastname :'Stan', Age: 23,department:null},
      {id:4,firstname: 'Nav', lastname :'Nix', Age: 23,department:null},
      {id:5,firstname: 'Gunn', lastname :'Abadon', Age: 123,department:null},
      {id:10,firstname: 'Lara', lastname :'Beca', Age: 13,department:null}
  ];
  let DEPARTMENTS = [
    { id: 1, name: 'Human Resources', location: 'Boston', nrOfEmployees: 1 },
    { id: 2, name: 'IT', location: 'Amsterdam', nrOfEmployees: 1 },
    { id: 3, name: 'Accounting', location: 'New York', nrOfEmployees: 1 }
  ];


  return {TASKS,EMPLOYEES,DEPARTMENTS};
}

//genId(TASKS:Task[]):number{
  //return TASKS.length>0 ? Math.max(...TASKS.map(Task=>Task.id))+1:11;
//}
genId<T extends Task | Employee | Department>(myTable: T[]):number{
  return myTable.length>0? Math.max(...myTable.map(t => t.id))+1:11;
}
}
