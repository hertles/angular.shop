import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {productRoutes} from "./constants/product-routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductsRoutingModule {}
