import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../../backend/services/news/news.service';
import { News } from '../../../../../backend/services/news/models/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styles: ``
})
export class NewsPageComponent implements OnInit {
  newsList: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsList = this.newsService.getAllNews();
  }
}
