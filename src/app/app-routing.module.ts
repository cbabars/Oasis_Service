import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomePageComponent,
  AboutUsComponent,
  AutomotiveComponent,
  AerospaceComponent,
  HeavyEngineeringComponent,
  CareersComponent,
  AddressComponent,
  ServiceRequestComponent,
  ProductEngComponent,
  ManufacturingEngComponent,
  GenralEngComponent,
  StaffingSolutionsComponent
} from './component';

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
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: 'serviceRequest',
    component: ServiceRequestComponent
  },
  {
    path: 'productEng',
    component: ProductEngComponent
  },
  {
    path: 'manufacturingEng',
    component: ManufacturingEngComponent
  },
  {
    path: 'genralEng',
    component: GenralEngComponent
  },
  {
    path: 'staffingSolutions',
    component: StaffingSolutionsComponent
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
