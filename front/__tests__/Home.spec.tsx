import { screen } from "@testing-library/react";
import Home from "@/app/page";
import { CategoryEnum } from "@/app/common/enums";
import { renderWithStore } from "@/__mocks__/render-with-store";
import { mockRouter } from "@/__mocks__/mocks";
import { MockPosts, mockUseFetchState } from "@/__mocks__/storeMocks";

jest.mock("../app/components/Search", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="search-component"></div>,
  };
});

describe("Home Page Unit Tests", () => {
  it("The main component should render", async () => {
    renderWithStore(
      <Home
        searchParams={{ category: CategoryEnum.films, page: 1, search: "" }}
      />,
      {}
    );

    const main = screen.getByTestId("home-page");

    expect(main).toBeInTheDocument();
  });

  it("The main component container exists", async () => {
    renderWithStore(
      <Home
        searchParams={{ category: CategoryEnum.films, page: 1, search: "" }}
      />,
      {}
    );

    const main = screen.getByTestId("container-component");

    expect(main).toBeInTheDocument();
  });
});
