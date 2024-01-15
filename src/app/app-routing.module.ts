import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { canActivate,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
{ path: '',redirectTo:'/summary',pathMatch:'full'},  
{ path: 'register',component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'summary',loadChildren: () => import('./summary/summary.module').then(m=>m.SummaryModule), ...canActivate(()=>redirectUnauthorizedTo(['/register']))},// the intention for can activate here is to not give acces to any page unles they are registered but it isnt working
{ path: 'viewers',loadChildren: () => import('./viewers/live.module').then(m=>m.ViewersModule) },
{ path: 'country',loadChildren: () => import('./country/country.module').then(m=>m.CountryModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
