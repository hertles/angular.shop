import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {FormsModule} from "@angular/forms";
import {TooltipDirective} from './directives/tooltip/tooltip.directive';
import {DistancePipe} from './pipes/distance/distance.pipe';

import localeRU from '@angular/common/locales/ru'
import {DecimalPipe, registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {appRoutes} from "./core/modules/app.route";
import { DistancePageComponent } from './pages/distance-page/distance-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

registerLocaleData(localeRU)

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TooltipDirective,
    DistancePipe,
    ProductPageComponent,
    DistancePageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
