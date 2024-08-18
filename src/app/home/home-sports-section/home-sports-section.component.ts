import { Component } from '@angular/core';

@Component({
  selector: 'app-home-sports-section',
  templateUrl: './home-sports-section.component.html',
  styles: ``
})
export class HomeSportsSectionComponent {
  handleClick(): void {
    console.log('Button clicked!');
  }
}
