import { Component, OnInit } from '@angular/core';
import { News } from '../../../backend/services/news/models/news.model';
import { NewsService } from '../../../backend/services/news/news.service';

@Component({
  selector: 'app-home-news-section',
  standalone: false,
  templateUrl: './home-news-section.component.html'
})
export class HomeNewsSectionComponent implements OnInit {
  mainNewsList: News[] = [];
  secondaryNewsList: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.mainNewsList = this.newsService.getMainNews();
    this.secondaryNewsList = this.newsService.getSecondaryNews();
  }
}
