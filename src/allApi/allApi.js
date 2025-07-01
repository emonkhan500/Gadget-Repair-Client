'use client'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const allApi= createApi({
    reducerPath:'allApi',
    baseQuery:fetchBaseQuery({
        baseUrl:process.env.NEXT_PUBLIC_BASE_URL || ''
    }),
    endpoints:(builder)=>({

        // getAllServices
        getAllServices: builder.query({
            query: () => `/service/api/get-all`,
          }),
        //   getBookingByEmail
        getBooking:builder.query({
            query:(email)=>`/trackbook/api/${email}`
        }),
        // getById
        getBookingById: builder.query({
            query: (id) => `/trackbook/api/deletebook/${id}`,
          }),   
        // bookingPost
        createBooking:builder.mutation({
            query:(newPost)=>({
                url:'/bookrepair/api/booking',
                method: 'POST',
                body:newPost

            })
        }),
        // DELETE
    deleteBooking: builder.mutation({
        query: (id) => ({
          url: `/trackbook/api/deletebook/${id}`,
          method: 'DELETE',
        }),
      }),
    //updateBooking
    updateBooking: builder.mutation({
        query: ({ id, updatedData }) => ({
          url: `/trackbook/api/deletebook/${id}`,
          method: "PATCH",
          body: updatedData,
        }),
      }),

    })

})
export const{ useGetAllServicesQuery, useGetBookingQuery,useCreateBookingMutation,useDeleteBookingMutation,useGetBookingByIdQuery,useUpdateBookingMutation} = allApi