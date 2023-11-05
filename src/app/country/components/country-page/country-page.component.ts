import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  covidData:any;
  constructor(
    private dataService:DataService,
    private searchService:SearchService
    ) {}

  isLoading:boolean = true;
  ngOnInit(): void {
      this.dataService.getAllData().subscribe((data:any) => {this.covidData = data; this.isLoading = false;});
      
  }

  searchCountry(country:string){
    const countries = this.covidData.data
    .filter(
      (c:any) => c.region.name.toLowerCase().includes(country.toLowerCase())
    );
   this.searchService.setCountries(countries);
  }

}
