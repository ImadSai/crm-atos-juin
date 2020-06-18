import { Component, OnInit } from '@angular/core';
import { NavItemI } from '../../interfaces/nav-item-i';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public navItems: NavItemI[];
  constructor() { }

  ngOnInit(): void {
    this.navItems = [
      {
        label: 'Login',
        route: '/login'
      },
      {
        label: 'Orders',
        route: '/orders'
      },
      {
        label: 'Clients',
        route: '/clients'
      },
      {
        label: 'Angular Doc',
        href: 'https://www.angular.io'
      }
    ];
  }

}
