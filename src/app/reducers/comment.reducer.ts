import { createReducer, on } from '@ngrx/store';
import * as CommentActions from '../actions/comment.actions';
import { Comment } from '../models/comment.model';
import { Post } from '../models/post.model';

export interface CommentState {
  comments: Comment[];
}

export const initialState: CommentState = {
  comments: [],
};

export const commentReducer = createReducer(
  initialState,
  on(CommentActions.LOAD_COMMENTS_SUCCESS, (state, { comments }) => ({
    ...state,
    comments: comments,
  }))
);
