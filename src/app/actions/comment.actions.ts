import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment.model';

export const LOAD_COMMENTS = createAction('[Comments Component] Load Comments');

export const LOAD_COMMENTS_SUCCESS = createAction(
  '[Comments Component] Load Comments Success',
  props<{ comments: Comment[] }>()
);
