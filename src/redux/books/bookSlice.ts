import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../components/RecentlyAdded';

interface IBookState {
  books: IBook[];
}

const initialState: IBookState = {
  books: [],
};

const bookSLice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    AddANewBook: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
  },
});

export const { AddANewBook } = bookSLice.actions;

export default bookSLice.reducer;
