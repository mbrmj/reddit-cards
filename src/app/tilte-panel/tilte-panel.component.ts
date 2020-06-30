import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tilte-panel',
  templateUrl: './tilte-panel.component.html',
  styleUrls: ['./tilte-panel.component.css']
})
export class TiltePanelComponent implements OnInit {
  @Input("title")
  title:string;
  @Input("user")
  user:string;
  @Input("sub")
  sub:string;

  
  constructor() { }

  ngOnInit() {
  }

}
