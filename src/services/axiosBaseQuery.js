import http from "./http";

export const axiosBaseQuery =
  () =>
    async ({ url, method = "GET", data, params }) => {
      // console.log("axiosBaseQuery called with:", {
      //   url,
      //   method,
      //   data,
      //   params,
      // });
      try {
        const result = await http({ url, method, data, params });

        return { data: (params?.isGetFull ? result : result?.data) || result };
      } catch (err) {
        console.error("❌ Error from http:", err);
        return {
          error: {
            status: err?.status || 500,
            data: err?.message || "Unknown error",
          },
        };
      }
    };
