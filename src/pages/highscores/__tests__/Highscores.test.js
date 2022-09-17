import { render, screen } from '@testing-library/react';
import Highscores from '../Highscores';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/';

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
