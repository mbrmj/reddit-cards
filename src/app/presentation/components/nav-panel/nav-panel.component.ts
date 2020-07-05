import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit {

   @Input("posts")
    posts: Array<Post>;


  constructor() { }
  ngOnInit() {
  }

}
