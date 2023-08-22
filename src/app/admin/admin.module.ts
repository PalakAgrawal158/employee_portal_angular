import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeLeavesComponent } from './components/employee-leaves/employee-leaves.component';
import { AddHolidaysComponent } from './components/add-holidays/add-holidays.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';



@NgModule({
  declarations: [
    AdminComponent,
    EmployeeLeavesComponent,
    AddHolidaysComponent,
    AddEmployeesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
