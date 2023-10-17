import { screen } from "@testing-library/react";
import { CategoryEnum } from "@/app/common/enums";
import { renderWithStore } from "@/__mocks__/render-with-store";
import CardsSection from "@/app/components/CardsSection";
import { MockPosts, mockPagination } from "@/__mocks__/storeMocks";

jest.mock("../app/components/Search", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="search-component"></div>,
  };
});

describe("Cards Section Component Unit Tests", () => {
  it("The main component should render", async () => {
    renderWithStore(
      <CardsSection
        searchParams={{ category: CategoryEnum.films, page: 1, search: "" }}
      />,
      {}
    );

    const main = screen.getByTestId("card-section-component");

    expect(main).toBeInTheDocument();
  });

  it("The main component Card exists", async () => {
    renderWithStore(
      <CardsSection
        searchParams={{ category: CategoryEnum.films, page: 1, search: "" }}
      />,
      {
        postsReducer: {
          posts: MockPosts,
          pagination: mockPagination,
          isLoading: false,
        },
      }
    );

    const main = screen.getByTestId("card-component");

    expect(main).toBeInTheDocument();
  });

  it("The main component Pagination exists", async () => {
    renderWithStore(
      <CardsSection
        searchParams={{ category: CategoryEnum.films, page: 1, search: "" }}
      />,
      {
        postsReducer: {
          posts: MockPosts,
          pagination: mockPagination,
          isLoading: false,
        },
      }
    );

    const main = screen.getByTestId("component-pagination");

    expect(main).toBeInTheDocument();
  });

  it("The main component Skeleton exists with loading true", async () => {
    renderWithStore(
      <CardsSection
        searchParams={{ category: CategoryEnum.films, page: 1, search: "" }}
      />,
      {
        postsReducer: {
          posts: MockPosts,
          pagination: mockPagination,
          isLoading: true,
        },
      }
    );

    const main = screen.getAllByTestId("component-skeleton");
    expect(main).toHaveLength(5);
  });
});
