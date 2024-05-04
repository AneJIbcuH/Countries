import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry } from "../models/models";

export const testApi = createApi({
  reducerPath: "testApi",
  tagTypes: ["country"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (build) => ({
    getCountries: build.query<ICountry[], string>({
      query: () => `all`,
      providesTags: [{ type: "country" }],
    }),
    getCountry: build.query<ICountry[], string>({
        query: (name) => `name/${name}`,
        providesTags: [{ type: "country" }],
      }),
  }),
});

export const { useGetCountriesQuery, useGetCountryQuery } = testApi;
