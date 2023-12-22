import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';//../enviroments/firebase.config.ts'                                                                                                                                                                            
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SummaryModule } from './summary/summary.module';
import { CountryModule } from './country/country.module';
import { LiveModule } from './live/live.module';
import { NgChartsModule } from 'ng2-charts';
import { LoaderComponent } from 'ng-loaders';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//Adjust the path as necessary


const firebaseConfig = {
  apiKey: "AIzaSyCR1USQpj1PpJIkzhAva23vH6dvGr9C3Lw",
  authDomain: "dzeusrnd.firebaseapp.com",
  projectId: "dzeusrnd",
  storageBucket: "dzeusrnd.appspot.com",
  messagingSenderId: "764210814999",
  appId: "1:764210814999:web:33fb70376501eeefb83c52",
  measurementId: "G-HRWL41914D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef =  collection(db, 'people')
getDocs(colRef)

//export default db;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SummaryModule,
    CountryModule,
    LiveModule,
    HttpClientModule,
    NgChartsModule,
    LoaderComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }