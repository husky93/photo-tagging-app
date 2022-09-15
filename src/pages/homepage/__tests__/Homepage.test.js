import { render, screen, act } from '@testing-library/react';
import Homepage from '../Homepage';
import React from 'react';
import imagesLoader from '../../../modules/imagesLoader';
import '@testing-library/jest-dom';

jest.mock('../../../components/Header', () => () => {
  return <header data-testid="header"></header>;
});

jest.mock('../components/LevelPicker', () => () => {
  return <div data-testid="levelpicker"></div>;
});

describe('Homepage', () => {
  it('renders', async () => {
    await act(async () => render(<Homepage />));
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  it('renders spinner initially', async () => {
    render(<Homepage />);
    const spinner = screen.getByTitle('Loading');
    expect(spinner).toBeInTheDocument();
  });
  it('renders content when images load', async () => {
    const imagesLoaderGetSpy = jest
      .spyOn(imagesLoader, 'loadImages')
      .mockResolvedValueOnce(['test.jpg']);
    await act(async () => render(<Homepage />));

    expect(imagesLoaderGetSpy).toBeCalled();
    const section = await screen.findByRole('region');
    expect(section).toBeInTheDocument();
  });
});
