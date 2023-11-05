import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CountryRoutingModule } from './country-routing.module';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { SharedModule } from '../shared/shared.module';
import { DataTableComponent } from './components/data-table/data-table.component';


@NgModule({
  declarations: [
    CountryPageComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class CountryModule { }
