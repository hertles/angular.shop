import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './pages/dogs.component';
import {DogsRoutingModule} from "@modules/dogs/dogs-routing.module";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";



@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule
  ]
})
export class DogsModule { }
