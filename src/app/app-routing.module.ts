import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent, AboutUsComponent } from './component';

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
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
