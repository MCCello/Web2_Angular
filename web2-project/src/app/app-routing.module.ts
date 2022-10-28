import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './AllEmployees/employees/employees.component';
import { EmployeeDetailComponent } from './AllEmployees/employee-detail/employee-detail.component'

import { DepartmentsComponent } from './AllDepartments/departments/departments.component';
import { DepartmentDetailsComponent } from './AllDepartments/department-details/department-details.component';

import{TasksComponent} from './AllTasks/tasks/tasks.component';

import { DashboardComponent } from './Shared/dashboard/dashboard.component';

import {CalendarComponent} from './Shared/calendar/calendar.component';
import { TaskDetailComponent } from './AllTasks/task-detail/task-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'departments', component: DepartmentsComponent},
  { path: 'detail/:id', component: DepartmentDetailsComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: 'empdetail/:id', component: EmployeeDetailComponent},
  { path: 'tasks',  component:TasksComponent},
  { path: 'taskdetail/:id', component:TaskDetailComponent},
  { path: 'calendar', component:CalendarComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }