import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wrap-box',
  templateUrl: './wrap-box.component.html',
  styleUrls: ['./wrap-box.component.css']
})
export class WrapBoxComponent implements OnInit {
  _position:string;
  defaultPosition:string="position-top";

  @Input("position")
  set position(val:string) {
    switch(val) {
      case "top":
      this._position="position-top";
      break;
      case "bottom":
      this._position="position-bottom";
      break;
    }
  }
  
  get position() {
      return this._position?this._position:this.defaultPosition;
  }
  
  
  opened=true;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  onOpenStateupdate() {
    this.opened=!this.opened;
  }
  
}
