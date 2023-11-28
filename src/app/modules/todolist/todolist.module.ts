import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodolistRoutingModule} from "./todolist-routing.module";
import {FormsModule} from "@angular/forms";
import {TodolistComponent} from "@modules/todolist/pages/todolist.component";


@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule
  ]
})
export class TodolistModule { }
