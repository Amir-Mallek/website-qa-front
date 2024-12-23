import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axe from 'axe-core';
import { Observable } from 'rxjs';
import { Metric } from '../models/Metric';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL = 'http://localhost:3000/qa';

  constructor(private http: HttpClient) {}

  getAccessibilityReport(url: string): Observable<axe.Result[]> {
    return this.http.get<axe.Result[]>(`${this.API_URL}/accessibility`, {
      params: { url: url },
    });
  }

  getHtmlValidationReport(url: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/html-validation`, {
      params: { url: url },
    });
  }

  getPerformanceReport(url: string): Observable<Metric[]> {
    return this.http.get<Metric[]>(`${this.API_URL}/performance`, {
      params: { url: url },
    });
  }
}
