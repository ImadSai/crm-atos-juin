import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInlineComponent } from './components/nav-inline/nav-inline.component';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { SharedModule } from '../shared/shared.module';
import { TextModule } from '../text/text.module';
import { TableLightComponent } from './components/table-light/table-light.component';



@NgModule({
  declarations: [NavInlineComponent, BtnComponent, TableLightComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TextModule
  ],
  exports: [NavInlineComponent, BtnComponent, TableLightComponent]
})
export class LibraryModule { }
