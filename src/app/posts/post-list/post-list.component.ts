import { Component, OnInit, OnDestroy} from '@angular/core';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../post.service';

@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent implements OnInit, OnDestroy{
  // posts = [
  //   {title: 'First POst', content: 'hello contents'},
  //   {title: 'Second POst', content: 'hello contents'},
  //   {title: 'Third POst', content: 'hello contents'},    
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor( public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}