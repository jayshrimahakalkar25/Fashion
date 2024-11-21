import { Component } from '@angular/core';

@Component({
  selector: 'app-kids-section',
  templateUrl: './kids-section.component.html',
  styleUrls: ['./kids-section.component.scss'],
})
export class KidsSectionComponent {
  kidsProduct = [
    {
      name: 'Men Oversized T-Shirt',
      price: 599,
      imgName: 'kid-05',
      rating: 4,
      shipping: 40.00,
    },
    {
      name: 'Men Straight High Jeans',
      price: 1499,
      imgName: 'kid-03',
      rating: 5,
      shipping: 80.00,
    },
    {
      name: 'Men Printed Regular Top',
      price: 450,
      imgName: 'kid-07',
      rating: 3,
      shipping: 40.00,
    },
    {
      name: 'Men Ankle Length Laggings',
      price: 249,
      imgName: 'kid-10',
      rating: 4,
      shipping: 60.00,
    },
    {
      name: 'Men Printed T-Shirt',
      price: 499,
      imgName: 'kid-12',
      rating: 4,
      shipping: 80.00,
    },
    {
      name: 'Men A-line Kurta Set',
      price: 1599,
      imgName: 'kid-14',
      rating: 5,
      shipping: 60.00,
    },
    {
      name: 'Men Formal Regular Footwear',
      price: 750,
      imgName: 'kid-13',
      rating: 4,
      shipping: 80.00,
    },
    {
      name: 'Men Winter Wear Coat',
      price: 1200,
      imgName: 'kid-15',
      rating: 5,
      shipping: 40.00,
    },
    {
      name: 'Men Formal Regular Footwear',
      price: 750,
      imgName: 'kid-04',
      rating: 4,
      shipping: 80.00,
    },
    {
      name: 'Men Winter Wear Coat',
      price: 1200,
      imgName: 'kid-09',
      rating: 5,
      shipping: 40.00,
    },
    {
      name: 'Men Formal Regular Footwear',
      price: 750,
      imgName: 'kid-08',
      rating: 4,
      shipping: 80.00,
    },
    {
      name: 'Men Winter Wear Coat',
      price: 1200,
      imgName: 'kid-11',
      rating: 5,
      shipping: 40.00,
    },
  ]
}
