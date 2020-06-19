import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInlineComponent } from './components/nav-inline/nav-inline.component';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { SharedModule } from '../shared/shared.module';
import { TextModule } from '../text/text.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';



@NgModule({
  declarations: [NavInlineComponent, BtnComponent, TableLightComponent, TableDarkComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TextModule
  ],
  exports: [NavInlineComponent, BtnComponent, TableLightComponent, TableDarkComponent]
})
export class LibraryModule { }
