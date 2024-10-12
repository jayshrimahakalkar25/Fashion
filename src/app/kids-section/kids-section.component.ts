import { Component } from '@angular/core';

@Component({
  selector: 'app-kids-section',
  templateUrl: './kids-section.component.html',
  styleUrls: ['./kids-section.component.scss'],
})
export class KidsSectionComponent {
  kidsCloths = [
    {
      price: 15,
      name: 'babyCloth',
    },
    {
      price: 150,
      name: 'baby care',
    },
    {
      price: 156,
      name: 'baby soap',
    },
  ];
}
