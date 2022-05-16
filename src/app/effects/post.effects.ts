import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostService } from '../services/post.service';
import * as PostActions from '../actions/post.actions';

@Injectable()
export class PostEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.LOAD_POSTS.type),
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

  constructor(private actions$: Actions, private postService: PostService) {}
}
