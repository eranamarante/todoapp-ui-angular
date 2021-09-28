import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './main/apps/home-page/home-page.component';
import { ToolbarComponent } from './main/apps/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
