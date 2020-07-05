import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class RedditServiceService {
  
  const url="http://www.reddit.com/r/9gag.json";
  constructor(private http: HttpClient) { }
  
  getPostsList(){
    return this.http.get(this.url)
    .pipe(map(response => response.json())
    ,map(json => <Array<any>>json.data.children)
    ,map(children => children.filter(d => (
      ['png', 'jpg'].indexOf(d.data.url.split('.').pop()) != -1
      )))
      ,map(children => children
        .map(d => new Post(
          d.data.id,
          d.data.title,
          d.data.url,
          d.data.subreddit,
          d.data.author
          ))));
          
        }
      }
