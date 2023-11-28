import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoutingModule} from "@modules/profile/profile-routing.module";
import {ProfileComponent} from "@modules/profile/pages/profile.component";
import {LoginComponent} from "@modules/profile/pages/login/login.component";
import {ProductSharedModule} from "../../shared/modules/product/product-shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    ProductSharedModule,
    FormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
