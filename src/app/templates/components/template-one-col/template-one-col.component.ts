import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-one-col',
  templateUrl: './template-one-col.component.html',
  styleUrls: ['./template-one-col.component.scss']
})
export class TemplateOneColComponent implements OnInit {
  @Input() title: boolean;
  @Input() bgColor2: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
