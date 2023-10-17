"use client";

import { useEffect, useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import { Post } from "../common/interfaces";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Post[]>([]);
  const favoritesLS = JSON.parse(localStorage.getItem("favorites") || "{}");

  useEffect(() => {
    setFavorites([
      ...(favoritesLS.films ?? []),
      ...(favoritesLS.peoples ?? []),
      ...(favoritesLS.starships ?? []),
      ...(favoritesLS.planets ?? []),
    ]);
  }, []);
  return (
    <Container>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mb-10 select-none">
        {favorites.length ? (
          favorites.map((post: Post) => (
            <Card
              key={post.name}
              post={post}
              category={post.category ?? "films"}
              favoritesPage={favorites}
              setFavoritesPage={setFavorites}
            />
          ))
        ) : (
          <div>No hay favoritos</div>
        )}
      </div>
    </Container>
  );
};

export default Favorites;
