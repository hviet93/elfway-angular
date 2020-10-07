import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shares/nav-bar/nav-bar.component';
import { NavBarMediumComponent } from './shares/nav-bar-medium/nav-bar-medium.component';
import { FooterComponent } from './shares/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarMediumComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
