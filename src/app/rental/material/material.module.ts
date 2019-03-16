import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//impotiong all thee mayterial modules 
import * as Material from '@angular/material';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatButtonModule
  ],
  exports :[
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatButtonModule



  ]

})
export class MaterialModule { }
