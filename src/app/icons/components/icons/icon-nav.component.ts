import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconNavComponent implements OnInit {

  public myIcon = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
