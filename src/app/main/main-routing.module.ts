import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { OnlineCarBuyersComponent } from './pages/customers/auto/online-car-buyers/online-car-buyers.component';
import { PrivateDealersComponent } from './pages/customers/auto/private-dealers/private-dealers.component';
import { DealarshipsComponent } from './pages/customers/auto/dealarships/dealarships.component';
import { AuctionsComponent } from './pages/customers/auto/auctions/auctions.component';
import { ManufacturesComponent } from './pages/customers/freight/manufactures/manufactures.component';
import { RecyclersComponent } from './pages/customers/freight/recyclers/recyclers.component';
import { DistributionComponent } from './pages/customers/freight/distribution/distribution.component';
import { OpenCarComponent } from './pages/carriers/auto/open-car/open-car.component';
import { EnclosedCarComponent } from './pages/carriers/auto/enclosed-car/enclosed-car.component';
import { FlatbedCarComponent } from './pages/carriers/auto/flatbed-car/flatbed-car.component';
import { SpecializedCarComponent } from './pages/carriers/auto/specialized-car/specialized-car.component';
import { DryVansComponent } from './pages/carriers/freight/dry-vans/dry-vans.component';
import { ReefersComponent } from './pages/carriers/freight/reefers/reefers.component';
import { BoxTrucksComponent } from './pages/carriers/freight/box-trucks/box-trucks.component';
import { FlatbedComponent } from './pages/carriers/freight/flatbed/flatbed.component';
import { ConestogoComponent } from './pages/carriers/freight/conestogo/conestogo.component';
import { ContainersComponent } from './pages/carriers/freight/containers/containers.component';
import { HowDoesComponent as HowDoesComponentAuto } from './pages/services/auto/how-does/how-does.component';
import { HowMuchComponent as HowMuchComponentAuto } from './pages/services/auto/how-much/how-much.component';
import { HowDoesComponent } from './pages/services/freight/how-does/how-does.component';
import { HowMuchComponent } from './pages/services/freight/how-much/how-much.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },

      // customers routers
      {
        path: 'customers', children: [
          {
            path: 'auto', children: [
              { path: 'online-car-buyers', component: OnlineCarBuyersComponent },
              { path: 'private-dealers', component: PrivateDealersComponent },
              { path: 'dealerships', component: DealarshipsComponent },
              { path: 'auctions', component: AuctionsComponent }
            ]
          },
          {
            path: 'freight', children: [
              { path: 'manufacturers-and-warehouses', component: ManufacturesComponent },
              { path: 'recyclers', component: RecyclersComponent },
              { path: 'distribution-centers', component: DistributionComponent }
            ]
          }
        ]
      },

      // carriers routers
      {
        path: 'carriers', children: [
          {
            path: 'auto', children: [
              { path: 'open-car-haulers', component: OpenCarComponent },
              { path: 'enclosed-car-haulers', component: EnclosedCarComponent },
              { path: 'flatbed-car-trailers', component: FlatbedCarComponent },
              { path: 'specialized-cars', component: SpecializedCarComponent }
            ]
          },
          {
            path: 'freight', children: [
              { path: 'dry-vans', component: DryVansComponent },
              { path: 'reefers', component: ReefersComponent },
              { path: 'box-trucks', component: BoxTrucksComponent },
              { path: 'flatbed', component: FlatbedComponent },
              { path: 'conestoga', component: ConestogoComponent },
              { path: 'containers', component: ContainersComponent }
            ]
          }
        ]
      },

      // services router
      {
        path: 'services', children: [
          {
            path: 'auto', children: [
              { path: 'how-does-it-work', component: HowDoesComponentAuto },
              { path: 'how-much-does-it-cost', component: HowMuchComponentAuto }
            ]
          },
          {
            path: 'freight', children: [
              { path: 'how-does-it-work', component: HowDoesComponent },
              { path: 'how-much-does-it-cost', component: HowMuchComponent }
            ]
          }
        ]
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
