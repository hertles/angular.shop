import {NgModule} from "@angular/core";
import {TooltipDirective} from "./directives/tooltip/tooltip.directive";

@NgModule({
  declarations: [
    TooltipDirective
  ],
  exports: [
    TooltipDirective
  ],
})
export class MainSharedModule {}
