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
            query: (params) => ({
                url: `${API_URL.CREATOR}?populate=*`,
                method: 'GET',
                // Strapi chuẩn thường dùng params dạng: { pagination: { page: 1, pageSize: 25 } }
                params: params,
            }),
            // 1. Gom tất cả các request pagination vào chung 1 cache key
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            // 2. Logic nối dữ liệu
            merge: (currentCache, newItems, { arg }) => {
                // Nếu fetch trang 1 (ví dụ lúc refresh hoặc reset), thay thế toàn bộ
                if (arg?.pagination?.page === 1) {
                    currentCache.data = newItems.data;
                    currentCache.meta = newItems.meta;
                } else {
                    // Nếu là trang > 1, nối thêm vào mảng data cũ
                    currentCache.data.push(...newItems.data);
                    // Cập nhật meta mới (để biết còn trang tiếp theo hay không)
                    currentCache.meta = newItems.meta;
                }
            },
            // 3. Bắt buộc fetch lại khi tham số thay đổi (page 1 -> page 2)
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),

    }),

});

export const {
    useGetCategoryQuery,
    useGetCreatorQuery
} = helperApi;