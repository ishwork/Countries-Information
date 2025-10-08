import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { Country } from "../types";

const COUNTRIES_PER_PAGE = 10;

// Fetch all countries for search functionality
const fetchAllCountries = async (): Promise<Country[]> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,languages`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }
  
  return await response.json();
};

// Fetch function that gets all countries and implements pagination
const fetchCountries = async ({ pageParam = 0 }): Promise<{
  countries: Country[];
  nextPage: number | undefined;
  totalCount: number;
}> => {
  const allCountries = await fetchAllCountries();
  
  // Calculate pagination
  const startIndex = pageParam * COUNTRIES_PER_PAGE;
  const endIndex = startIndex + COUNTRIES_PER_PAGE;
  const countries = allCountries.slice(startIndex, endIndex);
  
  // Determine if there's a next page
  const nextPage = endIndex < allCountries.length ? pageParam + 1 : undefined;
  
  return {
    countries,
    nextPage,
    totalCount: allCountries.length,
  };
};

export const useInfiniteCountries = () => {
  return useInfiniteQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook to get all countries for search functionality
export const useAllCountries = () => {
  return useQuery({
    queryKey: ['allCountries'],
    queryFn: fetchAllCountries,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};