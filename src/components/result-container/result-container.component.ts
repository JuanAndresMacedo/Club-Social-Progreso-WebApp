import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-container',
  standalone: true,
  imports: [],
  templateUrl: './result-container.component.html',
  styleUrl: './result-container.component.css',
})
export class ResultContainerComponent {
  @Input({ required: true }) sportTitle!: string;
  @Input({ required: true }) firstResult!: string;
  @Input({ required: true }) secondResult!: string;
  @Input({ required: true }) tournament!: string;
  @Input({ required: true }) opponentCrest!: string;
}
