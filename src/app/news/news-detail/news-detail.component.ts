import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../backend/services/news/news.service';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../../backend/services/news/models/news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css',
})
export class NewsDetailComponent implements OnInit{
  news?: News;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.news = this.newsService.getNewsById(id);
  }
}
