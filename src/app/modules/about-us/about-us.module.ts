import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AboutUsHeaderComponent } from './about-us-header/about-us-header.component';
import {HomeModule} from '../home/home.module';
import { AboutUsHistoryComponent } from './about-us-history/about-us-history.component';


@NgModule({
  declarations: [
    AboutUsPageComponent,
    AboutUsHeaderComponent,
    AboutUsHistoryComponent
  ],
  exports: [AboutUsPageComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HomeModule
  ]
})
export class AboutUsModule { }
