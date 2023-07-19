import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-catalog-backend-sable.vercel.app',
  }),
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => '/books/recent',
    }),

    getAllBooks: builder.query({
      query: () => '/books',
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    postABook: builder.mutation({
      query: (data) => ({
        url: '/books/new-book',
        method: 'POST',
        body: data,
      }),
    }),

    updateSingleBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    deleteSingleBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetRecentBooksQuery,
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  usePostABookMutation,
  useUpdateSingleBookMutation,
  useDeleteSingleBookMutation,
} = api;
