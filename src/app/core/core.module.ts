import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibraryModule } from '../library/library.module';
import { TextModule } from '../text/text.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    TextModule,
    LibraryModule
  ],
  exports: [HeaderComponent, NavComponent, FooterComponent]
})
export class CoreModule { }
