import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
//CRUD
//create
 // addPerson(firstName: string, lastName: string, dateOfBirth: any) {
   // return this.firestore.collection('people').add({
     // firstName,
     // lastName,
      //dateOfBirth // Ensure this is a Firebase Timestamp or a String
    //});
  //}
  //read
  //update
  //delete
  getSummaryData(){
    return this.http.get('https://covid-api.com/api/reports/total');
  }
  getAllData() {
  
    return this.http.get('https://covid-api.com/api/reports');
   
  }
  getPieData(country: string){
    return this.http.get(`https://covid-api.com/api/reports/total?iso=${country}`);
  }

}
