import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromComments from '../../selectors/comment.selectors';
import * as commentsActions from '../../actions/comment.actions';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentComponent implements OnInit {
  comments$ = this.store.select(fromComments.selectAll);
  isCommentsLoaded$ = this.store.select(fromComments.isLoaded);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.store.dispatch(commentsActions.LOAD_COMMENTS());
  }
}
