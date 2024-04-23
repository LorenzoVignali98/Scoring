import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://127.0.0.1:5000/Scoring/';

  constructor(private http: HttpClient) { }

  getProcessiSottoMonitoraggioData() {
    return this.http.get(`${this.apiUrl}ProcessReport`);
  }

  getProcessiRischioAltoData() {
    return this.http.get(`${this.apiUrl}ProcessReport`);
  }

  getProcessiRischioMedioData() {
    return this.http.get(`${this.apiUrl}ProcessReport`);
  }

  getProcessiConformiData() {
    return this.http.get(`${this.apiUrl}ProcessReport`);
  }

  getGlobalScoreData() {
    return this.http.get(`${this.apiUrl}GlobalScore`);
  }

  getStepScoreData() {
    return this.http.get(`${this.apiUrl}StepScore`);
  }

  getIssueLogData() {
    return this.http.get(`${this.apiUrl}Issuelog`);
  }

  getTestBookData() {
    return this.http.get(`${this.apiUrl}TestBook`);
  }

  getProcessChart() {
    return this.http.get(`${this.apiUrl}ProcessChart`);
  }
  
  getProcessReport() {
    return this.http.get(`${this.apiUrl}ProcessReport`);
  }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    
    return this.http.post(`${this.apiUrl}upload`, formData);
  }
}
