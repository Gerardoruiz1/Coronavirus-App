
import { Component, Input, OnChanges, OnInit, OnDestroy} from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges, OnDestroy{

@Input()covidData:any;
countries:any[]=[];
subscription=new Subscription();
constructor(private searchService:SearchService){

}

ngOnInit():void {
  this.subscription=this.searchService.getCountries().subscribe((data:any) => {this.countries = data;});
}

ngOnChanges(): void {
    this.countries = this.covidData?.data;
}
ngOnDestroy(): void {
    this.subscription.unsubscribe(); //previene que vote memoria cuando se activa
}
}

