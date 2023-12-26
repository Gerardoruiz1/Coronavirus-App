import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewersPageComponent } from './components/viewers-page/viewers-page.component';
import { EditViewersComponent } from './edit-viewers/edit-viewers.component';
import { ListViewersComponent } from './list-viewers/list-viewers.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full'},
  { path: 'create', component: ViewersPageComponent},
  { path: 'list-viewers', component:  ListViewersComponent},
  { path: 'update-viewers/:id', component: EditViewersComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ViewersRoutingModule { }
