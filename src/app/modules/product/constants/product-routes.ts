import {Routes} from "@angular/router";
import {ProductsComponent} from "@modules/product/pages/products.component";
import {ProductDetailComponent} from "@modules/product/pages/product-detail/product-detail.component";

export const productRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: ':id', component: ProductDetailComponent}
]
