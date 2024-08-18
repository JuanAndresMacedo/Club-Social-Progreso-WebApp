import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent {
  @Input({ required: true }) sport!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) imageUrl!: string;

  @Input() class: string = '';
}
