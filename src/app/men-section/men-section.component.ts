import { Component } from '@angular/core';

@Component({
  selector: 'app-men-section',
  templateUrl: './men-section.component.html',
  styleUrls: ['./men-section.component.scss']
})
export class MenSectionComponent {
  menProduct = [
    {
      name: 'Men Oversized T-Shirt',
      price: 599,
      imgName: 'men-01',
      rating: 4,
    },
    {
      name: 'Men Straight High Jeans',
      price: 1499,
      imgName: 'men-10',
      rating: 5,
    },
    {
      name: 'Men Printed Regular Top',
      price: 450,
      imgName: 'men-12',
      rating: 3,
    },
    {
      name: 'Men Ankle Length Laggings',
      price: 249,
      imgName: 'men-06',
      rating: 4,
    },
    {
      name: 'Men Printed T-Shirt',
      price: 499,
      imgName: 'men-05',
      rating: 4,
    },
    {
      name: 'Men A-line Kurta Set',
      price: 1599,
      imgName: 'men-02',
      rating: 5,
    },
    {
      name: 'Men Formal Regular Footwear',
      price: 750,
      imgName: 'men-08',
      rating: 4,
    },
    {
      name: 'Men Winter Wear Coat',
      price: 1200,
      imgName: 'men-07',
      rating: 5,
    },
    {
      name: 'Men Formal Regular Footwear',
      price: 750,
      imgName: 'men-03',
      rating: 4,
    },
    {
      name: 'Men Winter Wear Coat',
      price: 1200,
      imgName: 'men-09',
      rating: 5,
    },
    {
      name: 'Men Formal Regular Footwear',
      price: 750,
      imgName: 'men-11',
      rating: 4,
    },
    {
      name: 'Men Winter Wear Coat',
      price: 1200,
      imgName: 'men-04',
      rating: 5,
    },
  ]
}
