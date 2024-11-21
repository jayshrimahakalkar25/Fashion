import { Component} from '@angular/core';
import { ProductItemStoreService } from '../product-item-store.service';

@Component({
  selector: 'app-show-my-product-list',
  templateUrl: './show-my-product-list.component.html',
  styleUrls: ['./show-my-product-list.component.scss']
})
export class ShowMyProductListComponent {
 selectedItems: any = [] ;
 constructor (public productService : ProductItemStoreService){

 }
  
  ngOnInit(){
     this.selectedItems = this.productService.selectedItems;
  }

}
