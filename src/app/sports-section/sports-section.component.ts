import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-section',
  templateUrl: './sports-section.component.html',
  styleUrls: ['./sports-section.component.scss']
})
export class SportsSectionComponent {
  sportsProduct = [
    {
      name: 'Men Oversized T-Shirt',
      price: 599,
      imgName: 'sport-01',
      rating: 4,
    },
    {
      name: 'Men Straight High Jeans',
      price: 1499,
      imgName: 'sport-06',
      rating: 5,
    },
    {
      name: 'Men Printed Regular Top',
      price: 450,
      imgName: 'sport-12',
      rating: 3,
    },
    {
      name: 'Men Ankle Length Laggings',
      price: 249,
      imgName: 'sport-10',
      rating: 4,
    },
    {
      name: 'Men Printed T-Shirt',
      price: 499,
      imgName: 'sport-05',
      rating: 4,
    },
    {
      name: 'Men A-line Kurta Set',
      price: 1599,
      imgName: 'sport-02',
      rating: 5,
    },
    {
      name: 'Men Formal Regular Footwear',
      price: 750,
      imgName: 'sport-08',
      rating: 4,
    },
    {
      name: 'Men Winter Wear Coat',
      price: 1200,
      imgName: 'sport-03',
      rating: 5,
    },
    {
      name: 'Men Formal Regular Footwear',
      price: 750,
      imgName: 'sport-07',
      rating: 4,
    },
    {
      name: 'Men Winter Wear Coat',
      price: 1200,
      imgName: 'sport-09',
      rating: 5,
    },
    {
      name: 'Men Formal Regular Footwear',
      price: 750,
      imgName: 'sport-11',
      rating: 4,
    },
    {
      name: 'Men Winter Wear Coat',
      price: 1200,
      imgName: 'sport-04',
      rating: 5,
    },
  ]
}
