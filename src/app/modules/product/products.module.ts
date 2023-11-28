import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsRoutingModule} from "@modules/product/products-routing.module";
import {ProductDetailComponent} from "@modules/product/pages/product-detail/product-detail.component";
import {ProductsComponent} from "@modules/product/pages/products.component";
import {ProductSharedModule} from "../../shared/modules/product/product-shared.module";




@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductSharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
