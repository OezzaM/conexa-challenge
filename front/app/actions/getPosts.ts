import { axiosClient } from "../client/axiosClient";
import { Pagination, Post } from "../common/interfaces";

export interface IListingsParams {
  category?: string;
  offset?: number;
  limit?: number;
  search?: string;
}

export interface Collection {
  collection: Post[];
  pagination: Pagination;
}


export default async function getPosts({
  category = "films",
  offset = 0,
  limit = 5,
  search = "",
}: IListingsParams): Promise<Collection> {
  try {
    return await axiosClient
      .get(`/${category}`, {
        params: {
          offset,
          limit,
          search,
        },
      })
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    throw error;
  }
}
