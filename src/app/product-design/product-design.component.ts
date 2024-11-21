import { Component, Input } from '@angular/core';
import { ProductItemStoreService } from '../product-item-store.service';

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.scss'],
})
export class ProductDesignComponent {
  @Input() productInfo: any;

  constructor(public productService: ProductItemStoreService) {}

  addToCart(receivedData: any) {
   this.productService.addToSelectedItem(receivedData);
  }

  addToWishlist(receivedWishlistData:any){
  this.productService.addToSelectedWishlistItem(receivedWishlistData);
  }
}
