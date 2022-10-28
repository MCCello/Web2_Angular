import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../../Shared/Modules/department';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentService } from '../department-services/department.service';




@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  @Input() department: Department;

  departmentFormGroup: FormGroup;
  departments: Department[] = [];
  updatedDepartment: Department = new Department();

  
  constructor(private route: ActivatedRoute,
    private departService: DepartmentService,
    private locationMap: Location) { }

  ngOnInit(): void {
    
  }

  getDepartmentById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.departService.getDepartmentByID(id)
      .subscribe(department => this.department = department);
  }
  
  
  backClicked() {
    this.locationMap.back();
  }

  get name() { return this.departmentFormGroup.get('name'); }
  get location() { return this.departmentFormGroup.get('location'); }
  get numberOfEmployees() { return this.departmentFormGroup.get('numberOfEmployees'); }


  goBack(): void {
    this.locationMap.back();
  }
  save(): void {
    this.departService.updateDepartment(this.department)
      .subscribe();
  }
}
