import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { KidsSectionComponent } from './kids-section/kids-section.component';
import { ProductDesignComponent } from './product-design/product-design.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { SportsSectionComponent } from './sports-section/sports-section.component';
import { BrandSectionComponent } from './brand-section/brand-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    KidsSectionComponent,
    ProductDesignComponent,
    WomenSectionComponent,
    MenSectionComponent,
    SportsSectionComponent,
    BrandSectionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
