import { Component } from '@angular/core';
import axe from 'axe-core';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-accessibility',
  standalone: true,
  imports: [],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.css',
})
export class AccessibilityComponent {
  url: string = 'insat.rnu.tn';
  isLoading = true;
  violations: axe.Result[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAccessibilityReport(this.url).subscribe((violations) => {
      this.violations = violations;
      this.isLoading = false;
    });
  }
}
