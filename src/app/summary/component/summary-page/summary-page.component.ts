import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
covidData:any = {};

  constructor(private dataServices: DataService){ } 
ngOnInit(): void {
  this.dataServices.getSummaryData()
  .subscribe(
    (data: any) => {
      this.covidData = data;
}
  );
}
}
