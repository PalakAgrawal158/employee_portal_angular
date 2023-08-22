import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from './material.module';
import { DrawerBarComponent } from './components/drawer-bar/drawer-bar.component';
import { LayoutBarComponent } from './components/layout-bar/layout-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    DrawerBarComponent,
    LayoutBarComponent
  ],
 imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule],
})
export class SharedModule { }
