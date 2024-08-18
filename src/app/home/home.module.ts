import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { MainNewsComponent } from '../../components/main-news/main-news.component';
import { SecondaryNewsComponent } from '../../components/secondary-news/secondary-news.component';
import { HomeNewsSectionComponent } from './home-news-section/home-news-section.component';
import { HomeLatestResultsSectionComponent } from './home-latest-results-section/home-latest-results-section.component';
import { ResultContainerComponent } from '../../components/result-container/result-container.component';
import { HomeSportsSectionComponent } from './home-sports-section/home-sports-section.component';
import { FlipCardComponent } from '../../components/flip-card/flip-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { HomeMembershipSectionComponent } from './home-membership-section/home-membership-section.component';
import { FullImgMainNewsComponent } from '../../components/full-img-main-news/full-img-main-news.component';
import { FullImgSecondaryNewsComponent } from '../../components/full-img-secondary-news/full-img-secondary-news.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeSectionsComponent } from './home-sections/home-sections.component';
import { ContentContainerComponent } from '../../components/content-container/content-container.component';
import { MembersPageComponent } from './tabs/members-Tab/members-page/members-page.component';
import { HistoryPageComponent } from './tabs/club-Tab/history-page/history-page.component';
import { FacilitiesPageComponent } from './tabs/club-Tab/facilities-page/facilities-page.component';
import { HandballPageComponent } from './tabs/sports-Tab/handball-page/handball-page.component';
import { VolleyballPageComponent } from './tabs/sports-Tab/volleyball-page/volleyball-page.component';
import { CyclingPageComponent } from './tabs/sports-Tab/cycling-page/cycling-page.component';
import { ZumbaPageComponent } from './tabs/activities-Tab/zumba-page/zumba-page.component';
import { ArtisticRollerskatingPageComponent } from './tabs/activities-Tab/artistic-rollerskating-page/artistic-rollerskating-page.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { WeightRoomPageComponent } from './tabs/activities-Tab/weight-room-page/weight-room-page.component';
import { YogaPageComponent } from './tabs/activities-Tab/yoga-page/yoga-page.component';
import { FitnessPageComponent } from './tabs/activities-Tab/fitness-page/fitness-page.component';
import { NewsPageComponent } from './tabs/news-Tab/news-page/news-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeNavComponent,
    HomeNewsSectionComponent,
    HomeLatestResultsSectionComponent,
    HomeSportsSectionComponent,
    HomeMembershipSectionComponent,
    HistoryPageComponent,
    HomeSectionsComponent,
    FacilitiesPageComponent,
    MembersPageComponent,
    HandballPageComponent,
    VolleyballPageComponent,
    CyclingPageComponent,
    ZumbaPageComponent,
    ArtisticRollerskatingPageComponent,
    WeightRoomPageComponent,
    YogaPageComponent,
    FitnessPageComponent,
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainNewsComponent,
    SecondaryNewsComponent,
    ResultContainerComponent,
    FlipCardComponent,
    ButtonComponent,
    FullImgMainNewsComponent,
    FullImgSecondaryNewsComponent,
    FooterComponent,
    ContentContainerComponent,
    CarouselComponent
  ],
  exports: [
    HomeNavComponent
  ]
})
export class HomeModule { }
