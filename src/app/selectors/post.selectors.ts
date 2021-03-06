import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../reducers/post.reducer';

export const selectFeature = createFeatureSelector<PostState>('postState');

export const selectAll = createSelector(selectFeature, (state) => state.posts);

export const isLoaded = createSelector(
  selectFeature,
  (state) => state.posts.length > 0
);

export const selectFromUser = (userId: number) =>
  createSelector(selectAll, (posts) =>
    posts.filter((post) => post.userId === userId)
  );
