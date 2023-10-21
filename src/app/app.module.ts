import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProductComponent} from './shared/components/product-list/product/product.component';
import {FormsModule} from "@angular/forms";
import {TooltipDirective} from './shared/directives/tooltip/tooltip.directive';
import {DistancePipe} from './shared/pipes/distance/distance.pipe';
import localeRU from '@angular/common/locales/ru'
import {DecimalPipe, registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RouterOutlet} from "@angular/router";
import {DistancePageComponent} from './pages/distance-page/distance-page.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {TodolistPageComponent} from './pages/todolist-page/todolist-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ProductListComponent} from './shared/components/product-list/product-list.component';
import {HeaderComponent} from './layouts/header/header.component';
import {NavBarComponent} from './layouts/navbar/nav-bar.component';

registerLocaleData(localeRU)

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TooltipDirective,
    DistancePipe,
    MainPageComponent,
    DistancePageComponent,
    ErrorPageComponent,
    TodolistPageComponent,
    ProductPageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    ProductListComponent,
    HeaderComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
