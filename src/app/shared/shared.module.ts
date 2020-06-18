import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './directives/color.directive';



@NgModule({
  declarations: [ColorDirective],
  exports: [ColorDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
