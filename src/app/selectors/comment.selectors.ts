import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentState } from '../reducers/comment.reducer';

export const selectFeature =
  createFeatureSelector<CommentState>('commentState');

export const selectAll = createSelector(
  selectFeature,
  (state) => state.comments
);

export const isLoaded = createSelector(
  selectFeature,
  (state) => state.comments.length > 0
);
