import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanceRoutingModule } from "./distance-routing.module";
import {FormsModule} from "@angular/forms";
import {DistanceComponent} from "@modules/distance/pages/distance.component";
import {DistancePipe} from "@pipes/distance/distance.pipe";



@NgModule({
  declarations: [
    DistanceComponent,
    DistancePipe
  ],
  imports: [
    CommonModule,
    DistanceRoutingModule,
    FormsModule
  ]
})
export class DistanceModule { }
