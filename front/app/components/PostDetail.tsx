"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import getPostById from "../actions/getPostById";
import FilmDetail from "./FilmDetail";
import { CategoryEnum } from "../common/enums";
import PeopleDetail from "./PeopleDetail";
import StarshipDetail from "./StarshipDetail";
import PlanetDetail from "./PlanetDetail";
import Breadcrumb from "./Breadcrumb";
import { Film, Post, Starship } from "../common/interfaces";

interface PostDetailProps {
  category: string;
  postId: number;
}

const PostDetail: React.FC<PostDetailProps> = ({ category, postId }) => {
  const [post, setPost] = useState<any>();
  useEffect(() => {
    async function fetchData() {
      return await getPostById({ category, id: postId });
    }
    fetchData().then((data) => setPost(data));
  }, []);

  return (
    <div className="flex flex-col">
      <Breadcrumb
        name={post?.name}
        category={category}
      />
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <Image
          width={250}
          height={250}
          className="border-4 border-gray-700"
          src={post?.url || ""}
          alt={post?.name}
          priority
        />
        <div className="flex flex-col items-center md:items-start mt-7 md:mt-0 ml-5">
          {category === CategoryEnum.films && post && (
            <FilmDetail
              name={post?.name}
              director={post?.director}
              opening_crawl={post?.opening_crawl}
              producer={post?.producer}
            />
          )}
          {category === CategoryEnum.people && post && (
            <PeopleDetail
              name={post?.name}
              height={post?.height}
              mass={post?.mass}
              hair_color={post?.hair_color}
              skin_color={post?.skin_color}
              eye_color={post?.eye_color}
              gender={post?.gender}
            />
          )}
          {category === CategoryEnum.starships && post && (
            <StarshipDetail
              name={post?.name}
              model={post?.model}
              manufacturer={post?.manufacturer}
              crew={post?.crew}
              passengers={post?.passengers}
              consumables={post?.consumables}
              starship_class={post?.starship_class}
            />
          )}
          {category === CategoryEnum.planets && post && (
            <PlanetDetail
              name={post?.name}
              rotation_period={post?.rotation_period}
              orbital_period={post?.orbital_period}
              diameter={post?.diameter}
              climate={post?.climate}
              gravity={post?.gravity}
              terrain={post?.terrain}
              population={post?.population}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
