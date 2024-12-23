export class Metric {
  id: string;
  short: string;
  value: number;
  displayValue: string;
  distributions: {
    min: number;
    max: number;
    proportion: number;
  }[];
  multiplier: number;
  unit: string;
  description: string;
  learnMore: string;

  constructor(data: any) {
    this.id = data.id;
    this.short = data.short;
    this.value = data.value;
    this.displayValue = data.displayValue;
    this.distributions = data.distributions;
    this.multiplier = data.multiplier;
    this.unit = data.unit;
    this.description = data.description;
    this.learnMore = data.learnMore;
  }
}
