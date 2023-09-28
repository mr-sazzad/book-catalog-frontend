import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://book-catalog-backend-sable.vercel.app 🦀
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1/',
  }),
  tagTypes: ['books', 'comments'],

  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => '/books/recent',
      providesTags: ['books'],
    }),

    getAllBooks: builder.query({
      query: () => '/books',
      providesTags: ['books'],
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
      invalidatesTags: ['books'],
    }),

    updateSingleBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),

    deleteSingleBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),

    getBookReviews: builder.query({
      query: (id) => ({
        url: `/books/${id}/comments`,
      }),
      providesTags: ['comments'],
    }),

    postBookReview: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}/comment`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
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
  useGetBookReviewsQuery,
  usePostBookReviewMutation,
} = api;
