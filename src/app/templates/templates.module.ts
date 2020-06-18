import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOneColComponent } from './components/template-one-col/template-one-col.component';
import { TemplateTwoColsComponent } from './components/template-two-cols/template-two-cols.component';



@NgModule({
  declarations: [TemplateOneColComponent, TemplateTwoColsComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateOneColComponent, TemplateTwoColsComponent]
})
export class TemplatesModule { }
