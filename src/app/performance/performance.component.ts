import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Metric } from '../models/Metric';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.css',
})
export class PerformanceComponent {
  @Input() url: string = '';
  isLoading = true;
  metrics: Metric[] = [];
  metricColors = ['green', 'orange', 'red'];

  constructor(private api: ApiService) {}

  getDistribution(metric: Metric): number {
    if (metric.value <= metric.distributions[0].max) {
      return 0;
    }
    if (metric.value <= metric.distributions[1].max) {
      return 1;
    }
    return 2;
  }

  getPercentage(metric: Metric): number {
    let percentage = 0;
    if (metric.value <= metric.distributions[0].max) {
      return (
        ((metric.value - metric.distributions[0].min) /
          (metric.distributions[0].max - metric.distributions[0].min)) *
        metric.distributions[0].proportion
      );
    }

    percentage += metric.distributions[0].proportion;
    if (metric.value <= metric.distributions[1].max) {
      return (
        percentage +
        ((metric.value - metric.distributions[1].min) /
          (metric.distributions[1].max - metric.distributions[1].min)) *
          metric.distributions[1].proportion
      );
    }

    percentage += metric.distributions[1].proportion;
    return percentage + metric.distributions[2].proportion / 2;
  }

  ngOnInit() {
    this.api.getPerformanceReport(this.url).subscribe((metrics) => {
      this.metrics = metrics;
      this.isLoading = false;
    });
  }
}
