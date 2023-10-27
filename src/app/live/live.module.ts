import { NgModule } from '@angular/core';


import { LiveRoutingModule } from './live-routing.module';
import { LivePageComponent } from './components/live-page/live-page.component';


@NgModule({
  declarations: [
    LivePageComponent
  ],
  imports: [

    LiveRoutingModule,
  ]
})
export class LiveModule { }
