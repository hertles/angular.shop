import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {FormsModule} from "@angular/forms";
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { DistancePipe } from './pipes/distance/distance.pipe';

import localeRU from '@angular/common/locales/ru'
import {DecimalPipe, registerLocaleData} from "@angular/common";
registerLocaleData(localeRU)

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TooltipDirective,
    DistancePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
