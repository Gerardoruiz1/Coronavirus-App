import { NgModule } from '@angular/core';
import { ViewersRoutingModule } from './viewers-routing.module';
import { ViewersPageComponent } from './components/viewers-page/viewers-page.component';
import { ListViewersComponent } from './list-viewers/list-viewers.component';
import { EditViewersComponent } from './edit-viewers/edit-viewers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ViewersPageComponent,
    ListViewersComponent,
    EditViewersComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ViewersRoutingModule,
    CommonModule
  ]
})
export class ViewersModule { }
