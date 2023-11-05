import { Component,Input,OnChanges,OnInit,  } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/shared/services/data.service';



@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnInit,OnChanges {


  constructor(private dataService: DataService){
    

  }

@Input() country: string ='USA';
  public chart: any;
  

  ngOnInit(): void {
    this.createChart();
    this.getGlobalData();
  }

  getGlobalData() {
    this.dataService.getSummaryData().subscribe((response: any) => {
      const globalData = response.data;

      // Update the chart data arrays with global data
      this.chart.data.datasets[0].data = [globalData.confirmed, globalData.deaths, globalData.recovered];

      // Update the chart
      this.chart.update();
    });
  }


 
 ngOnChanges(): void {
     this.getCountryData();
 }
 getCountryData(){
  this.dataService.getPieData(this.country)
  .subscribe(
    (response:any) => {
     const confirmed = response.data.confirmed;
     const deaths = response.data.deaths;
     const recovered = response.data.recovered; 
     console.log(response);
     this.chart.data.datasets[0].data = [confirmed, deaths, recovered];
     this.chart.update(); 
    }
  );
 }

  createChart():any{
    this.chart = new Chart("MyChart", {
      type: 'pie', 

      data: {// values on X-Axis
        labels: ['Total Confirmed','Total Deaths','Total Recovered'],//
	       datasets: [{
    label: 'My First Dataset',
    data: [0,0,0],/*here goes confirmed, dearhs and recoverred data*/
    backgroundColor: [
      'blue',
      'red',
      'green',			
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

}

