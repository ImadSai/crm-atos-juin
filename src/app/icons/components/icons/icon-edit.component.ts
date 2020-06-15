import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconEditComponent implements OnInit {

  public myIcon = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

}
