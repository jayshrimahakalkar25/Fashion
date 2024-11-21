import { Component } from '@angular/core';
import { ProductItemStoreService } from '../product-item-store.service';

@Component({
  selector: 'app-show-my-wishlist-product',
  templateUrl: './show-my-wishlist-product.component.html',
  styleUrls: ['./show-my-wishlist-product.component.scss']
})
export class ShowMyWishlistProductComponent {
  selectedWishlistItems: any = [];
  constructor (public wishlistProductService : ProductItemStoreService){
 
  }
   
   ngOnInit(){
      this.selectedWishlistItems = this.wishlistProductService.selectedWishlistItems;
   }
}
