import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { render } from "@testing-library/react";

import { reducers, RootState } from "../app/redux/store";

const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: reducers,
    preloadedState: state,
  });
};

export const renderWithStore = (
  component: React.ReactElement,
  initialState: Partial<RootState>
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={testStore(initialState)}>{children}</Provider>
  );
  return render(component, { wrapper: Wrapper });
};