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
    component: HomePageComponent,
    data: {
      title: 'Welcome :: Oasis Technologies'
    }
  },
  {
    path: 'aboutUS',
    component: AboutUsComponent,
    data: {
      title: 'Oasis | About Us'
    }
  },
  {
    path: 'automotive',
    component: AutomotiveComponent,
    data: {
      title: 'Oasis | Automotive'
    }
  },
  {
    path: 'aerospace',
    component: AerospaceComponent,
    data: {
      title: 'Oasis | Aerospace'
    }
  },
  {
    path: 'heavyEngineering',
    component: HeavyEngineeringComponent,
    data: {
      title: 'Oasis | Heavy Engineering'
    }
  },
  {
    path: 'careers',
    component: CareersComponent,
    data: {
      title: 'Oasis | Careers'
    }
  },
  {
    path: 'address',
    component: AddressComponent,
    data: {
      title: 'Oasis | Address'
    }
  },
  {
    path: 'serviceRequest',
    component: ServiceRequestComponent,
    data: {
      title: 'Oasis | Request For Services'
    }
  },
  {
    path: 'productEng',
    component: ProductEngComponent,
    data: {
      title: 'Oasis | Product Engineering'
    }
  },
  {
    path: 'manufacturingEng',
    component: ManufacturingEngComponent,
    data: {
      title: 'Oasis | Manufacturing Engineering'
    }
  },
  {
    path: 'generalEng',
    component: GenralEngComponent,
    data: {
      title: 'Oasis | General Engineering'
    }
  },
  {
    path: 'staffingSolutions',
    component: StaffingSolutionsComponent,
    data: {
      title: 'Oasis | Staffing Solutions - US'
    }
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
