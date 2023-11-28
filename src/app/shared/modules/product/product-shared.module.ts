import {NgModule} from "@angular/core";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductComponent} from "./components/product-list/product/product.component";
import {MainSharedModule} from "../main/main-shared.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [MainSharedModule, CommonModule, RouterModule],
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent, ProductComponent]
})
export class ProductSharedModule {}
