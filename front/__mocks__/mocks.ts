import { mockUseFetchState } from "./storeMocks";

export const mockRouter = {
  push: jest.fn(),
};

export const mockSearchParams = {
  get: () =>
    jest.fn(() => ({
      page: 1,
    })),
};

jest.mock("next/navigation", () => ({}));

export const mockUseRouter = jest.fn();
mockUseRouter.mockReturnValue(mockRouter);

export const mockUseSearchParams = jest.fn();
mockUseSearchParams.mockReturnValue(mockSearchParams);

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => mockUseRouter),
  usePathname: jest.fn(() => "/films"),
  useSearchParams: jest.fn(() => ({
    get: jest.fn().mockReturnValue("MockedCategory"),
  })),
}));

jest.mock("querystring", () => ({
  parse: jest.fn(),
  stringify: jest.fn(),
}));

export const mockUseFetch = jest.fn();
mockUseFetch.mockReturnValue(mockUseFetchState);
jest.mock("../app/hooks/useFetch", () => mockUseFetch);
