import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {FormsModule} from "@angular/forms";
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
