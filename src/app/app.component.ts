import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monAgence';

  sold = false;

  properties = [
    {
      title: 'Ma super maison',
      category: 'Maison',
      sold: true
    },
    {
      title: 'Petit appartement',
      category: 'Appartement',
      sold: false
    },
    {
      title: 'Belle villa',
      category: 'Maison',
      sold: true
    }
  ];

  getSoldValue(i) {
    if (this.properties[i].sold) {
      return 'red';
    } else {
      return 'green';
    }
  }
}
