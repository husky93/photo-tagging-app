import { render, screen, act } from '@testing-library/react';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import imagesLoader from '../../../modules/imagesLoader';
import Game from '../Game';
import '@testing-library/jest-dom';

jest.mock('firebase/app');
jest.mock('firebase/firestore/lite');

jest.mock('../../../components/Header', () => () => {
  return <header data-testid="header"></header>;
});

describe('Game', () => {
  it('renders error when level id is wrong', () => {
    render(
      <MemoryRouter initialEntries={['/level-7']}>
        <Routes>
          <Route path="/level-:id" element={<Game />}></Route>
        </Routes>
      </MemoryRouter>
    );
    const heading = screen.getByText(/Error 404! Page not found/i);
    expect(heading).toBeInTheDocument();
  });
  it('renders spinner initially', () => {
    render(
      <MemoryRouter initialEntries={['/level-2']}>
        <Routes>
          <Route path="/level-:id" element={<Game />}></Route>
        </Routes>
      </MemoryRouter>
    );
    const spinner = screen.getByTitle('Loading');
    expect(spinner).toBeInTheDocument();
  });
  it('renders an image when it loads', async () => {
    const imagesLoaderGetSpy = jest
      .spyOn(imagesLoader, 'loadImages')
      .mockResolvedValueOnce(['test.jpg']);
    await act(async () =>
      render(
        <MemoryRouter initialEntries={['/level-1']}>
          <Routes>
            <Route path="/level-:id" element={<Game />}></Route>
          </Routes>
        </MemoryRouter>
      )
    );
    expect(imagesLoaderGetSpy).toBeCalled();
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
