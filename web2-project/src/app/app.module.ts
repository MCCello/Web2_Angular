import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TasksComponent } from './AllTasks/tasks/tasks.component';
import { TaskDetailComponent } from './AllTasks/task-detail/task-detail.component';


import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MemoryDataService} from './Shared/Services/memory-data.-service/memory-data.service';
import {HttpClientModule} from '@angular/common/http';

import { DepartmentsComponent } from './AllDepartments/departments/departments.component';
import { DepartmentDetailsComponent } from './AllDepartments/department-details/department-details.component';


import { DashboardComponent } from './Shared/dashboard/dashboard.component';

import { EmployeesComponent } from './AllEmployees/employees/employees.component';
import { EmployeeDetailComponent } from './AllEmployees/employee-detail/employee-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { PopoverModule } from 'ngx-smart-popover';

import { CalendarComponent } from './Shared/calendar/calendar.component';
import {FullCalendarModule} from '@fullcalendar/angular';



@NgModule({
  declarations: [
    AppComponent,

    TasksComponent,
    TaskDetailComponent,

    DepartmentsComponent,
    DepartmentDetailsComponent,
  
    DashboardComponent,

    EmployeesComponent,
    EmployeeDetailComponent,
    CalendarComponent,
    
    
    
  ],
    imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    PopoverModule,
    AppRoutingModule,
    HttpClientModule,

    FullCalendarModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
