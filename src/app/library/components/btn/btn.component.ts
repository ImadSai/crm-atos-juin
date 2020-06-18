import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() label: string;
  @Input() route: string;
  @Input() href: string;
  @Input() action: boolean;
  @Input() color: string;
  constructor() { }

  ngOnInit(): void {
  }

  public doAction() {
    console.log('btn clicked');

  }

}
