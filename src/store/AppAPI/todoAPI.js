import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoAPI = createApi({
  reducerPath: 'todoAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `/todos`,
    }),
  }),
});

export const { useGetTodosQuery } = todoAPI;
