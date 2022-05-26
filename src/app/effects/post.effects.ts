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
import * as PostActions from '../actions/post.actions';
import * as fromPosts from '../selectors/post.selectors';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.LOAD_POSTS.type),
      withLatestFrom(this.store.select(fromPosts.selectAll)),
      filter(([_, posts]) => posts.length === 0),
      mergeMap(() =>
        this.postService.getAll().pipe(
          map((posts) => ({
            type: PostActions.LOAD_POSTS_SUCCESS.type,
            posts: posts,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store: Store
  ) {}
}
