"use client";

import { useState, useCallback, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import { useRouter } from "next/navigation";

interface SearchProps {
  category: string;
  page: number;
}

const Search: React.FC<SearchProps> = ({ category, page }) => {
  const { fetchPosts } = useFetch();
  const router = useRouter();

  const params = useSearchParams();
  const queryParams = qs.parse(params.toString());
  const [search, setSearch] = useState(queryParams.search?.toString() ?? "");
  const handleSearch = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryParams;
    }

    const updatedQuery: any = {
      ...currentQuery,
      search,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
    fetchPosts(category, page, search);
  }, [search, category, fetchPosts, page]);

  useEffect(() => {
    if (!queryParams.search) {
      setSearch("");
    }
  }, [queryParams.search]);
  return (
    <div className="flex justify-center w-2/5 mx-auto mt-3">
      <div className="relative flex w-full flex-wrap items-stretch">
        <input
          type="text"
          className="relative m-0 -mr-0.5 block w-full min-w-0 pr-12 flex-auto rounded-full border-0 bg-slate-800 border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white/80 outline-none transition duration-200 ease-in-out "
          placeholder="Buscar"
          aria-label="Search"
          aria-describedby="button-addon1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="absolute right-0 z-[2] flex items-center h-full rounded-full bg-transparent p-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg hover:bg-white/10"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
