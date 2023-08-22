import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    // Export other Angular Material components here
  ],
})
export class MaterialModule { }
