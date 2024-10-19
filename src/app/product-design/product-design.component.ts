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

  addToCart(recivedData: any) {
    this.productService.addToSelectedItem(recivedData);
  }
}
