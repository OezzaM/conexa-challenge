import { useDispatch } from "react-redux";
import getPosts from "../actions/getPosts";
import {
  addPosts,
  addPagination,
  setIsLoading,
} from "../redux/reducer/postsReducer";

export default function useFetch() {
  const dispatch = useDispatch();

  const fetchPosts = async (category: string, page: number, search: string) => {
    const offset = (page - 1) * 5;
    const limit = 5;
      dispatch(setIsLoading({ loading: true }));
      const posts = await getPosts({ category, offset, limit, search });
      dispatch(addPosts({ posts, page, category }));
      dispatch(addPagination({ posts, category }));
      dispatch(setIsLoading({ loading: false }));
  };

  return { fetchPosts };
}
