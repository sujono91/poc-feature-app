import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    ...environment.features.map((feature: string) => {
      return {
        title: feature,
        url: `/${feature}`
      };
    })
  ];

  constructor() { }

  ngOnInit() {
  }

}
