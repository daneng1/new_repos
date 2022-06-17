import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.colorsForm || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  colorsState => colorsState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  colorsState => colorsState.error,
);

export const selectColors = createSelector(
  [selectDomain],
  colorsState => colorsState.colors,
);
