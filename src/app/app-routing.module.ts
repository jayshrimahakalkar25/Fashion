import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsSectionComponent } from './kids-section/kids-section.component';
import { HomeComponent } from './home/home.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { SportsSectionComponent } from './sports-section/sports-section.component';
import { BrandSectionComponent } from './brand-section/brand-section.component';
import { ShowMyProductListComponent } from './show-my-product-list/show-my-product-list.component';
import { ShowMyWishlistProductComponent } from './show-my-wishlist-product/show-my-wishlist-product.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'women',
    component: WomenSectionComponent,
  },
  {
    path: 'men',
    component: MenSectionComponent,
  },
  {
    path: 'kids',
    component: KidsSectionComponent,
  },
  {
    path: 'sports',
    component: SportsSectionComponent,
  },
  {
    path: 'brands',
    component: BrandSectionComponent,
  },
  {
    path: 'showMyProductList',
    component: ShowMyProductListComponent,
  },
  {
    path: 'showMyWishlistProductList',
    component: ShowMyWishlistProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
