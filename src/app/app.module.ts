import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import localeRU from '@angular/common/locales/ru'
import {DecimalPipe, registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './layouts/header/header.component';
import {NavBarComponent} from './layouts/navbar/nav-bar.component';
import {MainSharedModule} from "./shared/modules/main/main-shared.module";

registerLocaleData(localeRU)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    MainSharedModule,
    AppRoutingModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
