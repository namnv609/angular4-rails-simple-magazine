import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { APP_ROUTINGS } from "./app.routings";

import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { SiteHomeComponent } from './components/site/site-home/site-home.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteHomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTINGS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
