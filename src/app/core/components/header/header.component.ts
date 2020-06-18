import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: any;
  constructor() {

  }

  ngOnInit(): void {
    this.title = 'Nikki\'s App';
  }

}
