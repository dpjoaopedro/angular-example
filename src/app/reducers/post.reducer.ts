import { createReducer, on } from '@ngrx/store';
import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [],
};

export const postReducer = createReducer(
  initialState,
  on(PostActions.LOAD_POSTS_SUCCESS, (state, { posts }) => ({
    ...state,
    posts: posts,
  }))
);
