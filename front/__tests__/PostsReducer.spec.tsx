import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { MockPosts, mockPagination } from "@/__mocks__/storeMocks";
import postsReducer, {
  addPagination,
  addPosts,
  setIsLoading,
} from "@/app/redux/reducer/postsReducer";
import { Collection } from "@/app/actions/getPosts";

describe("Posts Reducer Unit Tests", () => {
  let store: EnhancedStore<{
    postsReducer: ReturnType<typeof postsReducer>;
  }>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        postsReducer,
      },
    });
  });

  it("Should add pagination to state", () => {
    const pagination: Collection = {
      collection: [],
      pagination: { limit: 5, nextPage: "", offset: 5, total: 5 },
    };
    store.dispatch(addPagination({ posts: pagination, category: "films" }));

    const state = store.getState().postsReducer;
    expect(state.pagination).toEqual({ ...mockPagination, films: 5 });
  });

  it("Should add posts to state", () => {
    const posts: Collection = {
      collection: [
        { name: "film", id: 1, url: "", category: "films", episode_id: 1 },
      ],
      pagination: { limit: 5, nextPage: "", offset: 5, total: 5 },
    };
    store.dispatch(addPosts({ posts, category: "films", page: 1 }));

    const state = store.getState().postsReducer;
    expect(state.posts.films[1]).toEqual(MockPosts.films[1]);
  });

  it("Should add loading to state", () => {
    const loading: boolean = true;
    store.dispatch(setIsLoading({ loading }));

    const state = store.getState().postsReducer;
    expect(state.isLoading).toEqual(true);
  });
});
