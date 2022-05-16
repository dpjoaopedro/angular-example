import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../reducers/posts.reducer';

export const selectFeature = createFeatureSelector<PostState>('postState');

// selectFeatureCount will have the type MemoizedSelector<object, number>
export const selectPosts = createSelector(
  selectFeature,
  (state) => state.posts
);
