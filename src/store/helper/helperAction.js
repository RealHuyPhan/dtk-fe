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
        // getRateLevel: builder.query({
        //     query: (params) => ({
        //         url: API_URL.VOUCHER_RATELEVEL,
        //         method: 'GET',
        //         params: {
        //             ...params
        //         },
        //     }),
        // }),
        // getVoucherList: builder.query({
        //     query: (params) => ({
        //         url: API_URL.VOUCHER_REWARD,
        //         method: 'GET',
        //         params: {
        //             ...params,
        //             isCount: null,
        //             isGetFull: true,
        //         },
        //     }),
        //     keepUnusedDataFor: 180,
        //     transformResponse: (response, meta, arg) => {
        //         return {
        //             ...response,
        //             params: arg
        //         };
        //     }
        // }),
        // postRating: builder.mutation({
        //     query: (params) => ({
        //         url: API_URL.VOUCHER_REWARD + `/${params?.voucherNo}/rate`,
        //         method: 'POST',
        //         data: {
        //             ...params
        //         }
        //     })
        // }),
    }),

});

export const {
    useGetCategoryQuery
} = helperApi;