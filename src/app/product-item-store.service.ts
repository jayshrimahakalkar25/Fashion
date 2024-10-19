import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductItemStoreService {
  selectedItems: any = [];
  constructor() {}

  addToSelectedItem(product: any) {
    this.selectedItems.push(product);
  }
}
