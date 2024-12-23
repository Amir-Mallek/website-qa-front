import { Component } from '@angular/core';
import { AccessibilityComponent } from '../accessibility/accessibility.component';
import { HtmlValidationComponent } from '../html-validation/html-validation.component';
import { PerformanceComponent } from '../performance/performance.component';
import { SeoComponent } from '../seo/seo.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AccessibilityComponent,
    HtmlValidationComponent,
    PerformanceComponent,
    SeoComponent,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  url: string = '';
  showComponents: boolean = false;
  loading: boolean = false;
  urlError: string = '';

  constructor(private api: ApiService) {}

  validateAndAnalyzeUrl(): void {
    this.loading = true;
    this.urlError = '';

    this.api.validateUrl(this.url).subscribe((response) => {
      this.loading = false;
      if (response.valid) {
        this.showComponents = true;
      } else {
        this.urlError =
          'The provided URL is not valid. Please enter a valid URL.';
      }
    });
  }
}
