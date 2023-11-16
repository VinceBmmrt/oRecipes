/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}

const customRender = (
  ui: ReactElement,
  { route = '/' } = {},
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
