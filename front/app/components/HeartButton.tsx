"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Post } from "../common/interfaces";
import { useCallback, useState } from "react";

interface HeartButtonProps {
  isFavorite: boolean;
  post: Post;
  category: string;
  favoritesPage?: Post[];
  setFavoritesPage?: (posts: Post[]) => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  isFavorite,
  post,
  category,
  favoritesPage,
  setFavoritesPage,
}) => {
  const [isFav, setIsFav] = useState(isFavorite);
  const handleFavorite = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      const favorites = JSON.parse(localStorage.getItem("favorites") ?? "{}");
      if (!isFav) {
        setIsFav(true);
        const newFavorite = {
          id: post.id,
          name: post.name,
          url: post.url,
          episode_id: post.episode_id,
          category,
        };

        const favoritesObj = {
          films: [],
          peoples: [],
          starships: [],
          planets: [],
        };

        if (favorites[category]?.length) {
          localStorage.setItem(
            "favorites",
            JSON.stringify({
              ...favorites,
              [category]: [...favorites[category], newFavorite],
            })
          );
        } else {
          localStorage.setItem(
            "favorites",
            JSON.stringify({
              ...favoritesObj,
              ...favorites,
              [category]: [newFavorite],
            })
          );
        }
      } else {
        setIsFav(false);
        localStorage.setItem(
          "favorites",
          JSON.stringify({
            ...favorites,
            [category]: favorites[category].filter(
              (favorite: Post) => favorite.id !== post.id
            ),
          })
        );
        if (favoritesPage && setFavoritesPage) {
          setFavoritesPage(
            favoritesPage.filter(
              (favorite: Post) =>
                favorite.id !== post.id || favorite.category !== post.category
            )
          );
        }
      }
    },
    [isFav, favoritesPage, setFavoritesPage]
  );

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLElement>) => handleFavorite(e)}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={isFav ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
