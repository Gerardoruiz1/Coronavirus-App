import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  getSummaryData(){
    return this.http.get('https://covid-api.com/api/reports/total');
  }
  getAllData() {
    return this.http.get('https://covid-api.com/api/reports');
  }
  getCarData(){
    
  }

}
