import { Component, Input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-seo',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './seo.component.html',
  styleUrl: './seo.component.css',
})
export class SeoComponent {
  @Input() url: string = '';
  isLoading = true;
  seoReportMarkdown: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getSeoReport(this.url).subscribe((report) => {
      this.seoReportMarkdown = report.content;
      this.isLoading = false;
    });
  }
}
