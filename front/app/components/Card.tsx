"use client";

import { useRouter, usePathname } from "next/navigation";
import HeartButton from "./HeartButton";
import Image from "next/image";
import { Post } from "../common/interfaces";
import { useEffect, useState } from "react";
import { categories } from "../common/constants";

interface CardProps {
  post: Post;
  category: string;
  favoritesPage?: Post[];
  setFavoritesPage?: (posts: Post[]) => void;
}

const Card: React.FC<CardProps> = ({
  post,
  category,
  favoritesPage,
  setFavoritesPage,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "{}")
  );
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") ?? "{}"));
  }, [localStorage.getItem("favorites")]);
  return (
    <div
      onClick={() => router.push(`/${category}/${post.id}`)}
      className="col-span-1 cursor-pointer group border-2 border-gray-600 rounded-xl overflow-hidden"
      data-testid="card-component"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square h-80 w-full relative overflow-hidden rounded-t-xl">
          <Image
            fill
            className="object-cover h-full w-full group-hover:scale-110 transition"
            src={post.url}
            alt={post.name}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute top-0 right-0 w-full h-full flex"
            style={{
              background:
                "linear-gradient(180deg, rgba(36, 36, 36, 0) 50%, #000000 100%)",
            }}
          >
            <div className="absolute top-3 right-3">
              <HeartButton
                isFavorite={favorites[category]?.find(
                  (favorite: Post) => favorite.id === post.id
                )}
                post={post}
                category={category}
                favoritesPage={favoritesPage}
                setFavoritesPage={setFavoritesPage}
              />
            </div>
            <div className="text-md flex flex-col text-center mb-1 px-2 self-end mx-auto pb-3">
              <span>
                {category === "films" ? `Episodio ${post.episode_id}: ` : ""}
                {post.name}
              </span>
              <span className="text-yellow-300">
                {pathname === "/favorites"
                  ? categories.find(
                      (categoryItem) => categoryItem.key === category
                    )?.name
                  : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
