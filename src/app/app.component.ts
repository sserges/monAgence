import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monAgence';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDBuIMQcQE4UYPmm-auWQ7Qw6vheyD8WEk',
      authDomain: 'post-dfd61.firebaseapp.com',
      databaseURL: 'https://post-dfd61.firebaseio.com',
      projectId: 'post-dfd61',
      storageBucket: 'post-dfd61.appspot.com',
      messagingSenderId: '456743157182',
      appId: '1:456743157182:web:d93c17733187b547508def'
    };

    firebase.initializeApp(firebaseConfig);
  }
}
