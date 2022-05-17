import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../reducers/posts.reducer';

export const selectFeature = createFeatureSelector<PostState>('postState');

export const selectPosts = createSelector(
  selectFeature,
  (state) => state.posts
);

export const isPostsLoaded = createSelector(
  selectFeature,
  (state) => state.posts.length > 0
);
