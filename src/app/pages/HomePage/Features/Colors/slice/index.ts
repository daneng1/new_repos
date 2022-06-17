import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { colorsFormSaga } from './saga';
import { ColorsState } from './types';

export const initialState: ColorsState = {
  colors: [],
  loading: false,
  error: null,
};

const key = 'colorsForm';

const slice = createSlice({
  name: key,
  initialState,
  reducers: {
    loadColors(state) {
      state.loading = true;
      state.error = null;
      state.colors = [];
    },
    colorsLoaded(state, action: PayloadAction<any>) {
      const repos = action.payload;
      state.colors = repos;
      state.loading = false;
    },
    colorsError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    changeColor(state, action: PayloadAction<any>) {
      const id = action.payload;
      state.colors.map(color => {
        if (color.id === id) color.showRGB = !color.showRGB;
        return state.colors;
      });
    },
  },
});

export const { actions: colorsActions, reducer } = slice;

export const useColorsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: colorsFormSaga });
  return { actions: slice.actions };
};
