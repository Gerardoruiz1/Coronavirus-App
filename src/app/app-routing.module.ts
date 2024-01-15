import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { canActivate,redirectUnauthorizedTo, } from '@angular/fire/auth-guard';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToRegister = () => redirectUnauthorizedTo(['/register']);

const routes: Routes = [
{ path: '',redirectTo:'/summary',pathMatch:'full'},  
{ path: 'register',component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'summary',loadChildren: () => import('./summary/summary.module').then(m=>m.SummaryModule),
canActivate: [AngularFireAuthGuard],
data: { authGuardPipe: redirectUnauthorizedToRegister }},
{ path: 'viewers',loadChildren: () => import('./viewers/live.module').then(m=>m.ViewersModule),
canActivate: [AngularFireAuthGuard],
data: { authGuardPipe: redirectUnauthorizedToRegister }},
{ path: 'country',loadChildren: () => import('./country/country.module').then(m=>m.CountryModule),
canActivate: [AngularFireAuthGuard],
data: { authGuardPipe: redirectUnauthorizedToRegister }},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
