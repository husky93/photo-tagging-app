import { render, screen, act, waitFor } from '@testing-library/react';
import Homepage from '../Homepage';
import React from 'react';
import imagesLoader from '../../../modules/imagesLoader';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../components/Header', () => () => {
  return <header data-testid="header"></header>;
});

jest.mock('../components/LevelPicker', () => () => {
  return <div data-testid="levelpicker"></div>;
});

jest.mock('polished', () => ({
  darken: () => '#fff',
}));

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

describe('Homepage', () => {
  it('renders', async () => {
    await act(async () => renderWithRouter(<Homepage />));
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  it('renders spinner initially', () => {
    renderWithRouter(<Homepage />);
    const spinner = screen.getByTitle('Loading');
    expect(spinner).toBeInTheDocument();
  });
  it('renders content when images load', async () => {
    const imagesLoaderGetSpy = jest
      .spyOn(imagesLoader, 'loadImages')
      .mockResolvedValueOnce(['test.jpg']);
    await act(async () => renderWithRouter(<Homepage />));
    expect(imagesLoaderGetSpy).toBeCalled();
    await waitFor(() => {
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();
    });
  });
  it('has a button', async () => {
    const imagesLoaderGetSpy = jest
      .spyOn(imagesLoader, 'loadImages')
      .mockResolvedValueOnce(['test.jpg']);
    await act(async () => renderWithRouter(<Homepage />));
    const button = screen.getByRole('button', { name: /go to leaderboards/i });
    expect(button).toBeInTheDocument();
  });
  it('button navigates to highscores page on click', async () => {
    const imagesLoaderGetSpy = jest
      .spyOn(imagesLoader, 'loadImages')
      .mockResolvedValueOnce(['test.jpg']);
    renderWithRouter(<Homepage />);
    const button = screen.getByRole('button', { name: /go to leaderboards/i });
    userEvent.click(button);
    await waitFor(() => {
      expect(window.location.pathname).toBe('/highscores');
    });
  });
});
