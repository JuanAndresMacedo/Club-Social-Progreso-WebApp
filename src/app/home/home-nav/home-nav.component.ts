import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrl: "./home-nav.component.css"
})
export class HomeNavComponent {
  constructor(private router: Router) {}

  navigateToHome = () => {
    this.router.navigate([""]);
  }

  navigateToSoon = () => {
    this.router.navigate(["proximamente"]);
  }
}
