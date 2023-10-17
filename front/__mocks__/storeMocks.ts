import { CategoryEnum } from "@/app/common/enums";
import { Post } from "@/app/common/interfaces";

export const mockUseFetchState = {
  fetchPosts: jest.fn(),
};

export const MockPosts: Record<CategoryEnum, Record<number, Post[]>> = {
  films: {
    1: [{ name: "film", id: 1, url: "", category: "films", episode_id: 1 }],
  },
  peoples: { 1: [{ id: 1, name: "peoples", url: "", category: "peoples" }] },
  starships: {
    1: [{ id: 1, name: "starships", url: "", category: "starships" }],
  },
  planets: { 1: [{ id: 1, name: "planets", url: "", category: "planets" }] },
};

export const mockPagination: Record<CategoryEnum, number> = {
  films: 0,
  peoples: 0,
  planets: 0,
  starships: 0,
};
