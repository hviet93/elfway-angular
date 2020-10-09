import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AboutUsHeaderComponent } from './about-us-header/about-us-header.component';
import {HomeModule} from '../home/home.module';
import { AboutUsHistoryComponent } from './about-us-history/about-us-history.component';
import { AboutUsClientComponent } from './about-us-client/about-us-client.component';
import { AboutUsExpertComponent } from './about-us-expert/about-us-expert.component';


@NgModule({
  declarations: [
    AboutUsPageComponent,
    AboutUsHeaderComponent,
    AboutUsHistoryComponent,
    AboutUsClientComponent,
    AboutUsExpertComponent
  ],
  exports: [AboutUsPageComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HomeModule
  ]
})
export class AboutUsModule { }
