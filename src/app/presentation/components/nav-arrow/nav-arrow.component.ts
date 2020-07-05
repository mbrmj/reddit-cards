import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-arrow',
  templateUrl: './nav-arrow.component.html',
  styleUrls: ['./nav-arrow.component.css']
})
export class NavArrowComponent implements OnInit {
  @Input("arrow-orientation")
  set arrowOrientation(orientation:string) {
    this._orientation="orientation-" + orientation;
  }

  get arrowOrientation() {
    return this._orientation;
  }
  _orientation:string;
  constructor() { }

  ngOnInit() {
  }

}
