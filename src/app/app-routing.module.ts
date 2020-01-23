import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';




const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  { path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  { path: 'heroes',
      loadChildren: () => import('./heroes/heroes.module').then(mod => mod.HeroesModule)
  },
  { path: 'detail/:id',
      loadChildren: () => import('./hero-detail/hero-detail.module').then(mod => mod.HeroDetailModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }