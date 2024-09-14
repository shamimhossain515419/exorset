import { baseApi } from "./baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for logging in a user
    createLoginUser: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["users"],
    }),
    //  get  user  info
    getUsersInfo: builder.query({
      query: () => ({
        url: `/users/get-single-user`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
  }),
});

// Exporting hooks for the defined mutations to be used in components
export const { useGetUsersInfoQuery, useCreateLoginUserMutation } = usersApi;
