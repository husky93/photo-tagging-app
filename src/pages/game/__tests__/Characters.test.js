import { render, screen, act } from '@testing-library/react';
import Characters from '../components/Characters';
import '@testing-library/jest-dom/';
import imagesLoader from '../../../modules/imagesLoader';

const mProps = {
  characters: [{ name: 'Waldo' }, { name: 'Wizard' }],
};

beforeEach(() => {
  const imagesLoaderGetSpy = jest
    .spyOn(imagesLoader, 'loadImages')
    .mockResolvedValueOnce(['waldo.png', 'odlaw.png', 'wizard.png']);
});

describe('Characters', () => {
  it('renders all three characters images', async () => {
    await act(async () =>
      render(<Characters characters={mProps.characters} />)
    );
    const images = await screen.findAllByRole('img');
    expect(images).toHaveLength(3);
  });
  it('character that is missing in props (is found) is transparent', async () => {
    await act(async () =>
      render(<Characters characters={mProps.characters} />)
    );
    const img = screen.getByRole('img', { name: /odlaw/i });
    expect(img).toHaveStyle('opacity: 0.25');
  });
});
