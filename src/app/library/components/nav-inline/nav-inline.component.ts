import { Component, OnInit, Input } from '@angular/core';
import { NavItemI } from 'src/app/core/interfaces/nav-item-i';

@Component({
  selector: 'app-nav-inline',
  templateUrl: './nav-inline.component.html',
  styleUrls: ['./nav-inline.component.scss']
})
export class NavInlineComponent implements OnInit {
  @Input() navItems: NavItemI[];
  constructor() { }

  ngOnInit(): void {

  }

}
