import { render, screen } from '@testing-library/react';
import Highscores from '../Highscores';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/';

jest.mock('firebase/app');
jest.mock('firebase/firestore/lite');
jest.spyOn(React, 'useEffect').mockImplementationOnce((cb) => cb()());

const renderWithRouter = (ui, { route = '/highscores' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

describe('Highscores', () => {
  it('renders', () => {
    renderWithRouter(<Highscores />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
