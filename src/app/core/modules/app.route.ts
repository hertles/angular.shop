import {Routes} from "@angular/router";
import {ProductPageComponent} from "../../pages/product-page/product-page.component";
import {DistancePageComponent} from "../../pages/distance-page/distance-page.component";
import {ErrorPageComponent} from "../../pages/error-page/error-page.component";

export const appRoutes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "products"},
  {path: "products", component: ProductPageComponent},
  {path: "distance", component: DistancePageComponent},
  {path: "**", component: ErrorPageComponent},
]
