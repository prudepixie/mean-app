import { Component, Input} from '@angular/core';
import { Post } from '../post.model';

@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent {
  // posts = [
  //   {title: 'First POst', content: 'hello contents'},
  //   {title: 'Second POst', content: 'hello contents'},
  //   {title: 'Third POst', content: 'hello contents'},    
  // ];

  @Input() posts: Post[] = [];
}