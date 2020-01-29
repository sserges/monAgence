import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties = [];

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.propertiesService.getProperties().subscribe(
      (data: any) => {
        this.properties = data;
        // console.log(data);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('Observable complete');
      }
    );
  }

  getSoldValue(i) {
    if (this.properties[i].sold) {
      return 'red';
    } else {
      return 'green';
    }
  }

}
