import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: 'admin', component: AdminComponent,children: [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'holidays', component: HolidaysComponent },
    // { path: 'unathorised', component: UnauthorisedComponent },

  ]
}];

@NgModule({
  declarations : [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
