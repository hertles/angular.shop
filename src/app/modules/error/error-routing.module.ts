import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {errorRoutes} from "./constants/error-routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes)
  ]
})
export class ErrorRoutingModule {}
