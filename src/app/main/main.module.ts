import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectSearchModule } from 'mat-select-search';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SearchPipe } from '../core/pipes/search.pipe';

import { HomeComponent } from './pages/home/home.component';
import { OnlineCarBuyersComponent } from './pages/customers/auto/online-car-buyers/online-car-buyers.component';
import { PrivateDealersComponent } from './pages/customers/auto/private-dealers/private-dealers.component';
import { DealarshipsComponent } from './pages/customers/auto/dealarships/dealarships.component';
import { AuctionsComponent } from './pages/customers/auto/auctions/auctions.component';
import { ManufacturesComponent } from './pages/customers/freight/manufactures/manufactures.component';
import { RecyclersComponent } from './pages/customers/freight/recyclers/recyclers.component';
import { DistributionComponent } from './pages/customers/freight/distribution/distribution.component';
import { DryVansComponent } from './pages/carriers/freight/dry-vans/dry-vans.component';
import { ReefersComponent } from './pages/carriers/freight/reefers/reefers.component';
import { BoxTrucksComponent } from './pages/carriers/freight/box-trucks/box-trucks.component';
import { FlatbedComponent } from './pages/carriers/freight/flatbed/flatbed.component';
import { ConestogoComponent } from './pages/carriers/freight/conestogo/conestogo.component';
import { ContainersComponent } from './pages/carriers/freight/containers/containers.component';
import { OpenCarComponent } from './pages/carriers/auto/open-car/open-car.component';
import { EnclosedCarComponent } from './pages/carriers/auto/enclosed-car/enclosed-car.component';
import { FlatbedCarComponent } from './pages/carriers/auto/flatbed-car/flatbed-car.component';
import { SpecializedCarComponent } from './pages/carriers/auto/specialized-car/specialized-car.component';
import { HowDoesComponent as HowDoesComponentAuto } from './pages/services/auto/how-does/how-does.component';
import { HowMuchComponent as HowMuchComponentAuto } from './pages/services/auto/how-much/how-much.component';
import { HowDoesComponent } from './pages/services/freight/how-does/how-does.component';
import { HowMuchComponent } from './pages/services/freight/how-much/how-much.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/services/freight/how-much/products/products.component';
import { TruckContainerComponent } from './pages/services/freight/how-much/truck-container/truck-container.component';
import { ClientFormComponent } from './pages/services/freight/how-much/client-form/client-form.component';
import { ResultComponent } from './pages/services/freight/how-much/result/result.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsCarouselComponent } from './components/news-carousel/news-carousel.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FixedButtonsComponent } from './components/fixed-buttons/fixed-buttons.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NewsCarouselComponent,
    MainBarComponent,
    HeaderComponent,
    FixedButtonsComponent,
    SectionTitleComponent,
    BreadCrumbsComponent,
    OnlineCarBuyersComponent,
    PrivateDealersComponent,
    DealarshipsComponent,
    AuctionsComponent,
    ManufacturesComponent,
    RecyclersComponent,
    DistributionComponent,
    DryVansComponent,
    ReefersComponent,
    BoxTrucksComponent,
    FlatbedComponent,
    ConestogoComponent,
    ContainersComponent,
    OpenCarComponent,
    EnclosedCarComponent,
    FlatbedCarComponent,
    SpecializedCarComponent,
    HowDoesComponent,
    HowMuchComponent,
    HowDoesComponentAuto,
    HowMuchComponentAuto,
    AboutUsComponent,
    LoaderSpinnerComponent,
    ProductsComponent,
    TruckContainerComponent,
    ClientFormComponent,
    ResultComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSelectSearchModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
  ]
})
export class MainModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
