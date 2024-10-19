import { Component } from '@angular/core';
import { ProductItemStoreService } from '../product-item-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  profileShow = false;
  showAllSelectedItem = false;
  selectedItemsCounter = 0;
  wishlistShow = false;
  counterValue = 0;

  constructor(public productService: ProductItemStoreService) {}

  showProfileDetails() {
    if (this.profileShow === true) {
      this.profileShow = false;
    } else {
      this.profileShow = true;
    }
  }

  showWishlistDetails() {
    if (this.wishlistShow === true) {
      this.wishlistShow = false;
    } else {
      this.wishlistShow = true;
    }
  }

  showAddedItem() {
    console.log(this.productService.selectedItems);
    if (this.showAllSelectedItem === true) {
      this.showAllSelectedItem = false;
    } else {
      this.showAllSelectedItem = true;
    }
    this.selectedItemsCounter = this.productService.selectedItems.length;
  }
}
