import { Component } from '@angular/core';
import axe from 'axe-core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-html-validation',
  standalone: true,
  imports: [],
  templateUrl: './html-validation.component.html',
  styleUrl: './html-validation.component.css',
})
export class HtmlValidationComponent {
  url: string = 'insat.rnu.tn';
  isLoading = true;
  violations: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getHtmlValidationReport(this.url).subscribe((violations) => {
      this.violations = violations;
      this.isLoading = false;
    });
  }
}