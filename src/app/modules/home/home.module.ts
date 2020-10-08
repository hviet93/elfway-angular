import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WidgetComponent } from './widget/widget.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MediumBannerComponent } from './medium-banner/medium-banner.component';
import { LargeBannerComponent } from './large-banner/large-banner.component';
import { BannerStoryComponent } from './banner-story/banner-story.component';
import { BannerStoryMediumComponent } from './banner-story-medium/banner-story-medium.component';
import { HomeElementorComponent } from './home-elementor/home-elementor.component';
import {ProductModule} from '../product/product.module';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { BestSellerComponent } from './best-seller/best-seller.component';


@NgModule({
  declarations: [
    WidgetComponent, HomePageComponent, MediumBannerComponent, LargeBannerComponent,
    BannerStoryComponent, BannerStoryMediumComponent, HomeElementorComponent,
    FeatureProductComponent, BestSellerComponent
  ],
  exports: [HomePageComponent, HomeElementorComponent, BannerStoryMediumComponent, BannerStoryComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ProductModule
    ]
})
export class HomeModule { }
