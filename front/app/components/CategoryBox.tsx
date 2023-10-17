"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useDispatch } from "react-redux";
import { addPosts, setIsLoading } from "../redux/reducer/postsReducer";

interface CategoryBoxProps {
  label: string;
  name: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ label, name }) => {
  const router = useRouter();
  const params = useSearchParams();
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    let currentQuery = {
      ...qs.parse(params.toString())
    };

    const updatedQuery: any = {
      ...currentQuery,
      page: 1,
      category: label,
      search: undefined
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    if(currentQuery.category !== label ){
      dispatch(setIsLoading({ loading: true }));
      dispatch(addPosts({ posts: [], page: "1", category: label }));
    }
    
    router.push(url);
  }, [label, router, params]);
  return (
    <li
      onClick={handleClick}
      className={`cursor-pointer select-none ${
        params?.get("category") === label ? "border-b-2" : ""
      }`}
    >
      {name}
    </li>
  );
};

export default CategoryBox;
