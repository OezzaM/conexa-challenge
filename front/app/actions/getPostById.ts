import { axiosClient } from "../client/axiosClient";
import { Film, Post, Starship } from "../common/interfaces";

export interface IListingsParams {
  category: string;
  id: number;
}

export default async function getPostById({
  category,
  id,
}: IListingsParams): Promise<Post | Film | Starship> {
  try {
    return await axiosClient.get(`/${category}/${id}`).then((response) => {
      return response.data;
    });
  } catch (error) {
    throw error;
  }
}
