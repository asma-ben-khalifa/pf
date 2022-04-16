import {createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl: "http://localhost:3005"}),
    endpoints: (builder) =>({
        getAllproducts: builder.query({
            query: () => "products",
        })
    })
})
/*custum hook*/
export const {useGetAllproductsQuery } = productsApi