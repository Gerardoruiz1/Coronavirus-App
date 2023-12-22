import { NgModule } from '@angular/core';
import { ViewersRoutingModule } from './viewers-routing.module';
import { ViewersPageComponent } from './components/viewers-page/viewers-page.component';


@NgModule({
  declarations: [
    ViewersPageComponent
  ],
  imports: [

    ViewersRoutingModule,
  ]
})
export class ViewersModule { }
