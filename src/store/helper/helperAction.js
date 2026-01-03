import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../services/axiosBaseQuery';
import { API_URL } from '@/utils/ApiConstant';

export const helperApi = createApi({
    reducerPath: 'helperApi',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: (params) => ({
                url: `${API_URL.CATEGORY}?populate=*`,
                method: 'GET',
                params: {
                    ...params
                },
            }),
        }),
        getCreator: builder.query({
            query: (params) => {
                const { page, pageSize, ...rest } = params;

                return {
                    url: API_URL.CREATOR,
                    method: 'GET',
                    params: {
                        'pagination[page]': page,
                        'pagination[pageSize]': pageSize,
                        'populate': '*',
                        ...rest,
                    },
                };
            },
            transformResponse: (response, meta, arg) => {
                return {
                    data: response.data,
                    meta: response.meta,
                    params: arg
                };
            }
        }),

    }),

});

export const {
    useGetCategoryQuery,
    useGetCreatorQuery
} = helperApi;