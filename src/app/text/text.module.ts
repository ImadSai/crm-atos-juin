import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './components/text/text.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TextComponent]
})
export class TextModule { }
