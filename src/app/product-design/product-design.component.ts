import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.scss'],
})
export class ProductDesignComponent {
  @Input() productInfo: any;
}
