import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent, AboutUsComponent, AutomotiveComponent, AerospaceComponent, HeavyEngineeringComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'aboutUS',
    component: AboutUsComponent
  },
  {
    path: 'automotive',
    component: AutomotiveComponent
  },
  {
    path: 'aerospace',
    component: AerospaceComponent
  },
  {
    path: 'heavyEngineering',
    component: HeavyEngineeringComponent
  },
  {
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
