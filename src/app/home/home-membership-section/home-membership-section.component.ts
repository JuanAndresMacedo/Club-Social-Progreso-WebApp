import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-membership-section',
  templateUrl: './home-membership-section.component.html',
  styleUrl: './home-membership-section.component.css',
})
export class HomeMembershipSectionComponent {
  constructor(private router: Router) {}

  navigateToMembership = () => {
    this.router.navigate(["/socios"]);
  }
}
