import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPosts from '../../selectors/post.selectors';
import * as postsActions from '../../actions/post.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts$ = this.store.select(fromPosts.selectPosts);
  isPostsLoaded$ = this.store.select(fromPosts.isPostsLoaded);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.store.dispatch(postsActions.LOAD_POSTS());
  }
}
