import { Component } from '@angular/core';
import { AccessibilityComponent } from '../accessibility/accessibility.component';
import { HtmlValidationComponent } from '../html-validation/html-validation.component';
import { PerformanceComponent } from '../performance/performance.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AccessibilityComponent,
    HtmlValidationComponent,
    PerformanceComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
