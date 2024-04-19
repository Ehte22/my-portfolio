import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/client" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            register: builder.mutation({
                query: userData => {
                    return {
                        url: "/send-email",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
        }
    }
})

export const { useRegisterMutation, useAddUserMutation } = userApi
