import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { RulesModule } from './rules/rules.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainModule,
    RulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
