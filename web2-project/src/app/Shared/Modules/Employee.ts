import {Department} from './department'; 
import { Time } from '@angular/common';

export class Employee {   //Constructor for employee 
    id : number;
    department_id : number;
    first_name : string;
    last_name: string;
    birth_date: Time;

    constructor(){
    }


}