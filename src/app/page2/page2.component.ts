import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  globalScoreData: any[] = [];
  stepScoreData: any[] = [];
  issueLogData: any[] = [];
  testBookData: any[] = [];
  progress: number[] = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGlobalScoreData().subscribe((response: any) => {
      this.globalScoreData = response;
      console.log(this.globalScoreData);
    });

    this.apiService.getStepScoreData().subscribe((response: any) => {
      this.stepScoreData = response;
      console.log(this.stepScoreData);
    });

    this.apiService.getIssueLogData().subscribe((response: any) => {
      this.issueLogData = response;
      console.log(this.issueLogData);
    });

    this.apiService.getTestBookData().subscribe((response: any) => {
      this.testBookData = response;
      console.log(this.testBookData);
    });
  }
  calculateWidth(value: number): string {
    return (value / 10) * 10 + '%';
}

calculatePercentage(value: number): number {
    return (value / 10) * 10;
}
}
