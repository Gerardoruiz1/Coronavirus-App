import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './component/summary-page/summary-page.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { ConfirmedByCountryComponent } from './components/confirmed-by-country/confirmed-by-country.component';
import { SharedModule } from '../shared/shared.module';
import { CountryChartComponent } from './components/country-chart/country-chart.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardsComponent,
    ConfirmedByCountryComponent,
    CountryChartComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedModule,
    NgChartsModule
 

  ]
})
export class SummaryModule { }
