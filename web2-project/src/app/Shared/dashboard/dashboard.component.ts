import { Component, OnInit } from '@angular/core';
import { Department } from '../Modules/department';
import { DepartmentService } from '../../AllDepartments/department-services/department.service';
import { Employee } from '../Modules/Employee';
import { EmployeService } from '../../AllEmployees/employees-services/employe.service';
import { Task } from '../Modules/task';
import { TaskService} from '../../AllTasks/task-services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  departments: Department[] = [];
  tasks: Task[] = [];
  employees: Employee[] = [];

  constructor(private departmentService: DepartmentService,
              private empService: EmployeService,
              private taskService: TaskService
    
    ) { }

  ngOnInit() {
    this.getDepartments();
    this.getEmployees();
    this.getTasks();
  }

  getDepartments(): void {
    this.departmentService.getDepartmentsDB()
      .subscribe(departments => this.departments = departments.slice(1, 4));
  }
  getTasks(): void {
    this.taskService.getTaskss()
    .subscribe(tasks => this.tasks = tasks.slice(1,4));
  }
  getEmployees(): void {
    this.empService.getemploys()
    .subscribe(employees => this.employees = employees.slice(1,4));
  }
}