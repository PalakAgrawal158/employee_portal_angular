import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { MyLeavesComponent } from './components/my-leaves/my-leaves.component';
import { ApplyLeavesComponent } from './components/apply-leaves/apply-leaves.component';
import { HolidaysComponent } from './components/holidays/holidays.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    MyLeavesComponent,
    ApplyLeavesComponent,
    HolidaysComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
