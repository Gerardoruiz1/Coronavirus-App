import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';//../enviroments/firebase.config.ts'                                                                                                                                                                            
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SummaryModule } from './summary/summary.module';
import { CountryModule } from './country/country.module';
import { ViewersModule } from './viewers/live.module';// here is the viewer module
import { NgChartsModule } from 'ng2-charts';
import { LoaderComponent } from 'ng-loaders';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environments';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, } from 'firebase/firestore';//imoprt this 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//Adjust the path as necessary



//export default db;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SummaryModule,
    CountryModule,
    ViewersModule,  
    HttpClientModule,
    NgChartsModule,
    LoaderComponent,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }