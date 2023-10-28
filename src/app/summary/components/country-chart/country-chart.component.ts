import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { Label } from 'chart.js';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent {

pieChartData:ChartDataset[]=[
  {
    data: [64,24,54]
  }
];
pieChartLabels: Label[]=["label1", "label2", "label3", "label"]
}
