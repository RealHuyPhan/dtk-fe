import { createApi } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../utils/ApiConstant';
import { axiosBaseQuery } from '../../services/axiosBaseQuery';

export const helperApi = createApi({
    reducerPath: 'voucherApi',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        //getItemRecommend
        // getDetailVoucher: builder.query({
        //     query: (params) => ({
        //         url: API_URL.VOUCHER_REWARD + `/${params?.voucherNo}`,
        //         method: 'GET',
        //         params: {

        //         },
        //     }),
        // }),
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
    // useGetDetailVoucherQuery,
    // useGetRateLevelQuery,
    // useGetVoucherListQuery,
    // usePostRatingMutation,
} = helperApi;