import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {profileRoutes} from "./constants/profile-routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class ProfileRoutingModule {}
