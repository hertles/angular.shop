import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {dogsRoutes} from "@modules/dogs/constants/dogs-routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dogsRoutes)
  ]
})
export class DogsRoutingModule {}
