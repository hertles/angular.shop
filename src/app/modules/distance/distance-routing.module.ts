import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {distanceRoutes} from "./constants/distance-routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(distanceRoutes)
  ]
})
export class DistanceRoutingModule {}
