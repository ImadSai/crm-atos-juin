import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './components/icons/icon-nav.component';
import { IconCloseComponent } from './components/icons/icon-close.component';
import { IconEditComponent } from './components/icons/icon-edit.component';
import { IconDeleteComponent } from './components/icons/icon-delete.component';



@NgModule({
  declarations: [IconNavComponent, IconCloseComponent, IconEditComponent, IconDeleteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconNavComponent, IconCloseComponent, IconEditComponent, IconDeleteComponent]
})
export class IconsModule { }
