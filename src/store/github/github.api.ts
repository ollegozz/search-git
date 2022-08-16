import { ServerResponse, IUSer, IRepo } from './../../models/models';
import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query<IUSer[], string>({
            query: (search: string) => ({
                url: 'search/users',
                params: {
                   q: search,
                   per_page: 10 
                }
            }),
            transformResponse:(response: ServerResponse<IUSer>) => response.items
        }),
        getUserRepos: build.query<IRepo[], string>({
            query: (username:string) => ({
                url: `users/${username}/repos`
            })
        })
    })
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi

//lazy сделать запрос когда захотим