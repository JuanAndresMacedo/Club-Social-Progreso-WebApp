import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { ContentContainerComponent } from '../../components/content-container/content-container.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ContentContainerComponent,
    HomeModule
  ]
})
export class NewsModule { }
