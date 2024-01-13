import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'summary',
    pathMatch: 'full'
  },
  
  { path: 'summary',
loadChildren: () => import('./summary/summary.module').then(m=>m.SummaryModule)
},

{ path: 'viewers',
loadChildren: () => import('./viewers/live.module').then(m=>m.ViewersModule)
},

{ path: 'country',
loadChildren: () => import('./country/country.module').then(m=>m.CountryModule)
},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
