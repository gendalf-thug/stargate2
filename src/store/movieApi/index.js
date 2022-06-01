import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.tvmaze.com/search/'
  }),
  endpoints: build => ({
    getMovie: build.query({
      query: name => `shows?q=${name}`
    })
  })
})

export const { useGetMovieQuery } = movieApi
