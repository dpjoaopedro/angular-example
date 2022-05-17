import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  withLatestFrom,
  filter,
} from 'rxjs/operators';
import { PostService } from '../services/post.service';
import { Store } from '@ngrx/store';
import * as CommentActions from '../actions/comment.actions';
import * as fromComments from '../selectors/comment.selectors';
import { CommentService } from '../services/comment.service';

@Injectable()
export class CommentEffects {
  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.LOAD_COMMENTS.type),
      withLatestFrom(this.store.select(fromComments.selectAll)),
      filter(([_, comments]) => comments.length === 0),
      mergeMap(() =>
        this.commentService.getAll().pipe(
          map((comments) => ({
            type: CommentActions.LOAD_COMMENTS_SUCCESS.type,
            comments: comments,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private commentService: CommentService,
    private store: Store
  ) {}
}
