import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgbCollapseModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'POC_Scoring';
  currentPage: number = 1;
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private router: Router) {}

  navigateToPage(pageNumber: number) {
    switch (pageNumber) {
      case 1:
        this.router.navigate(['/']); 
        break;
      case 2:
        this.router.navigate(['dashBoard']); 
        break;
      case 4:
        this.router.navigate(['page2']); 
        break;
      case 5:
        this.router.navigate(['upload']); 
        break;
      default:
        break;
    }
    this.isCollapsed = true;
  }
}