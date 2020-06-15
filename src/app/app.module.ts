import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { IconsModule } from './icons/icons.module';
import { TextModule } from './text/text.module';
import { UiModule } from './ui/ui.module';
import { TemplatesModule } from './templates/templates.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
    IconsModule,
    TextModule,
    UiModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
