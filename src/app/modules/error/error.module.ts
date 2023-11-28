import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from "@modules/error/pages/error.component";
import {ErrorRoutingModule} from "@modules/error/error-routing.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    RouterLink
  ]
})
export class ErrorModule { }
