import { Component, OnInit } from '@angular/core';
import { Department } from '../../Shared/Modules/department';
import { FormGroup, FormControl } from '@angular/forms';
import { DepartmentService } from '../department-services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departmentFormGroup: FormGroup;
  departments : Department[];
  selectedDepartment: Department;
  departmentByID: Department;
  department: Department = new Department();
  depName: string;
  newDepartment: Department;
  deleteFormGroup: FormGroup;
  searchText;
  


  constructor(private departService: DepartmentService) { 
    this.department.name='';
  }

  ngOnInit() {
    this.deleteFormGroup = new FormGroup({});
    this.getDepartments();
  }
  onSelect(department: Department): void {
    this.selectedDepartment = department;           
  }
  deleteDepartment() {

    this.departService.deleteDepartment(this.selectedDepartment).subscribe(data => {
      this.getDepartments();
    });
    this.selectedDepartment = null;
  }

  

  getDepartments(): void {
    this.departService.getDepartmentsDB()
        .subscribe(departments2 => this.departments = departments2);
  }
  getDepartmentByID(): void {
    this.departService.getDepartmentByID(this.selectedDepartment.id)
      .subscribe(data => this.departmentByID = data);
  }
  addDepartment(): void {
    this.departService.addDepartment(this.department).subscribe
    (departments=>{this.getDepartments();
          this.reset();
           this.depName=this.department.name;}) 
  }

  private reset(){
    this.department.id=null;
    this.department.building=null;
    this.department.employees=null;
    this.department.name=null;
  }
  delete(department2: Department): void {
    this.departments = this.departments.filter(h => h !== department2);
    this.departService.deleteDepartment(department2).subscribe();
  }
  

}
