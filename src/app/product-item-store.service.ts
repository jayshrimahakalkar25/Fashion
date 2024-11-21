import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductItemStoreService {
  selectedItems: any = [];
  selectedWishlistItems: any = [];

  addToSelectedItem(product: any) {
    this.selectedItems.push(product);
  }

  addToSelectedWishlistItem(wishlistProduct:any){
    this.selectedWishlistItems.push(wishlistProduct);
  }
}
