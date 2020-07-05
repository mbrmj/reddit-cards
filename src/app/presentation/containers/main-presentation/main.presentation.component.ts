import { Component, OnInit } from '@angular/core';
import {  Post } from '../../model/post';

@Component({
  selector: 'app-main-presentation',
  templateUrl: './main.presentaion.component.html',
  styleUrls: ['./main.presentation.component.css']
})
export class MainPresentationComponent implements OnInit {
  
  posts:Array<Post>=[
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
    {
      id:"1",
      sub:"userSub",
      user:"userTest",
      title: "test Title"
    },
  ]
  constructor() { }
  
  ngOnInit() {
  }
  
}
