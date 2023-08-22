import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { HolidaysComponent } from './components/holidays/holidays.component';

const routes: Routes = [{
  path: 'employee', component: EmployeeComponent,children: [
    { path: '', redirectTo: 'holidays', pathMatch: 'full' },
    { path: 'holidays', component: HolidaysComponent },
    // { path: 'unathorised', component: UnauthorisedComponent },

  ]
}];

@NgModule({
  declarations : [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
