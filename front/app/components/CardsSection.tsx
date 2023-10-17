"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import Pagination from "./Pagination";
import SkeletonCard from "./SkeletonCard";
import { CategoryEnum } from "../common/enums";
import { Post } from "../common/interfaces";
import Search from "./Search";
import EmptyComponent from "./EmptyComponent";

interface CardsSectionProps {
  searchParams: { category: CategoryEnum; page: number; search?: string };
}

const CardsSection: React.FC<CardsSectionProps> = ({
  searchParams: { category, page, search },
}) => {
  const { posts, pagination, isLoading } = useSelector(
    (state: RootState) => state.postsReducer
  );

  const { fetchPosts } = useFetch();

  useEffect(() => {
    fetchPosts(category, page, search ?? "");
  }, [category, page, search]);

  return (
    <div data-testid="card-section-component">
      <Search category={category} page={page} />
      {!isLoading ? (
        posts[category][page]?.length ? (
          <>
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mb-10 select-none">
              {posts[category][page].map((post: Post) => (
                <Card key={post.name} post={post} category={category} />
              ))}
            </div>
            <Pagination
              searchParams={{ category, page: String(page) }}
              length={pagination[category]}
            />
          </>
        ) : (
          <EmptyComponent category={category} />
        )
      ) : (
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mb-10 select-none">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
    </div>
  );
};

export default CardsSection;
