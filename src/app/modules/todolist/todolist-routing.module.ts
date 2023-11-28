import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {todolistRoutes} from "./constants/todolist-routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(todolistRoutes)
  ]
})
export class TodolistRoutingModule {}
