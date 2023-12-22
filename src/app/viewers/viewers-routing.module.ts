import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewersPageComponent } from './components/viewers-page/viewers-page.component';

const routes: Routes = [
  { path: '', component:ViewersPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewersRoutingModule { }
