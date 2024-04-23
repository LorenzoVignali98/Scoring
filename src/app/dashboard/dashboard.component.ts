import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  processiSottoMonitoraggioData: any;
  processiRischioAltoData: any;
  processiRischioMedioData: any;
  processiConformiData: any ;
  processChart: any[] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getProcessiSottoMonitoraggioData().subscribe((response: any) => {
      this.processiSottoMonitoraggioData = response;
      console.log(this.processiSottoMonitoraggioData);
    });

    this.apiService.getProcessiRischioAltoData().subscribe((response: any) => {
      this.processiRischioAltoData = response;
      console.log(this.processiRischioAltoData);
    });

    this.apiService.getProcessiRischioMedioData().subscribe((response: any) => {
      this.processiRischioMedioData = response;
      console.log(this.processiRischioMedioData);
    });

    this.apiService.getProcessiConformiData().subscribe((response: any) => {
      this.processiConformiData = response;
      console.log(this.processiConformiData);
    });

    this.apiService.getProcessChart().subscribe((response: any) => {
      this.processChart = response;
      console.log(this.processChart);
    });
  }
 
  
}
