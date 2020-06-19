import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './directives/color.directive';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [ColorDirective, TotalPipe, StateDirective],
  exports: [ColorDirective, TotalPipe, StateDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
