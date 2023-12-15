import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coreModule } from '../common/core.module';
import { GardeningComponent } from './gardening/gardening.component';
import { GardenTeamComponent } from './garden-team/garden-team.component';
import { GardenAboutusComponent } from './garden-aboutus/garden-aboutus.component';
import { GardenContactComponent } from './garden-contact/garden-contact.component';
import { RetailHomeTopCategoryComponent } from './retail-home-top-category/retail-home-top-category.component';
import { RetailDesignComponent } from './retail-design/retail-design.component';
import { RetailCardsComponent } from './retail-cards/retail-cards.component';
import { RetailFollowInstaComponent } from './retail-follow-insta/retail-follow-insta.component';
import { PracticeBannerComponent } from './practice-banner/practice-banner.component';
import { ChartsComponent } from './charts/charts.component';



@NgModule({
  declarations: [
    GardeningComponent,
    GardenTeamComponent,
    GardenAboutusComponent,
    GardenContactComponent,
    RetailHomeTopCategoryComponent,
    RetailDesignComponent,
    RetailCardsComponent,
    RetailFollowInstaComponent,
    PracticeBannerComponent,
    ChartsComponent,
  ],
  imports: [
    CommonModule,
    coreModule
  ]
})
export class ThemeModule { }
