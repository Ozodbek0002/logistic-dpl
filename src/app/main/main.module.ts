import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectSearchModule } from 'mat-select-search';


import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsCarouselComponent } from './components/news-carousel/news-carousel.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FixedButtonsComponent } from './components/fixed-buttons/fixed-buttons.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';


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
    SectionTitleComponent
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
    MatSelectSearchModule
  ]
})
export class MainModule { }
