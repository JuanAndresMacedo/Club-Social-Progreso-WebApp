import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-full-img-main-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './full-img-main-news.component.html',
  styleUrl: './full-img-main-news.component.css',
})
export class FullImgMainNewsComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) topic!: string;
  @Input() newsId!: number;
}
