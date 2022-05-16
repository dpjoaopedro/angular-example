import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post.model';

export const LOAD_POSTS = createAction('[Post Component] Load Posts');

export const LOAD_POSTS_SUCCESS = createAction(
  '[Post Component] Load Posts Success',
  props<{ posts: Post[] }>()
);
