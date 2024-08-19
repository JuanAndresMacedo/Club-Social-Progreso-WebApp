import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soon-page',
  templateUrl: './soon-page.component.html',
  styles: ``
})
export class SoonPageComponent {
  ngAfterViewInit(): void {
    document.body.style.overflow = 'auto';
  }

  constructor(private router: Router) {}

  navigateToHome = () => {
    this.router.navigate([""]);
  }
}
