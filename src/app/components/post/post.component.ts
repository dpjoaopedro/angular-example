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
  posts$ = this.store.select(fromPosts.selectAll);
  isPostsLoaded$ = this.store.select(fromPosts.isLoaded);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.store.dispatch(postsActions.LOAD_POSTS());
  }

  share(message: string) {
    window.open('https://twitter.com/intent/tweet?text=' + message, '_blank');
  }
}
