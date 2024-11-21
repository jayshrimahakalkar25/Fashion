import { Component } from '@angular/core';

@Component({
  selector: 'app-women-section',
  templateUrl: './women-section.component.html',
  styleUrls: ['./women-section.component.scss']
})
export class WomenSectionComponent {
  womenProduct = [
    {
      name: 'Women Oversized T-Shirt',
      price: 599,
      imgName: 'image-01',
      rating: 4,
    },
    {
      name: 'Women Straight High Jeans',
      price: 999,
      imgName: 'image-06',
      rating: 5,
    },
    {
      name: 'Women Printed Regular Top',
      price: 450,
      imgName: 'image-23',
      rating: 3,
    },
    {
      name: 'Women Ankle Length Laggings',
      price: 249,
      imgName: 'image-10',
      rating: 4,
    },
    {
      name: 'Women Printed T-Shirt',
      price: 499,
      imgName: 'image-02',
      rating: 4,
    },
    {
      name: 'Women A-line Kurta Set',
      price: 1599,
      imgName: 'image-12',
      rating: 5,
    },
    {
      name: 'Women Regular Footwear',
      price: 750,
      imgName: 'footwear-01',
      rating: 4,
    },
    {
      name: 'Women Winter Wear Coat',
      price: 1200,
      imgName: 'image-18',
      rating: 5,
    },
    {
      name: 'Women Toe-Ring Footwear',
      price: 820,
      imgName: 'footwear-03',
      rating: 5,
    },
    {
      name: 'Women Winter Wear Coat',
      price: 1200,
      imgName: 'image-16',
      rating: 5,
    },
    {
      name: 'Sling Bag with Detachable Strap',
      price: 630,
      imgName: 'bag-01',
      rating: 4,
    },
    {
      name: 'Women Formal Regular Top',
      price: 650,
      imgName: 'image-24',
      rating: 3,
    },
  ]
}

// wishlistItem: any [];
// //counterValue = 0;

// addToWishlist (productDetails:any){
//   this.WishlistItem.push(productDetails);
//   //this.counterValue = this.WishlistProduct.length;
// }