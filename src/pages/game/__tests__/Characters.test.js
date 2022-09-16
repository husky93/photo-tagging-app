import { render, screen, act, waitFor } from '@testing-library/react';
import Characters from '../components/Characters';
import '@testing-library/jest-dom/';

const mProps = {
  characters: [{ name: 'Waldo' }, { name: 'Wizard' }],
};

jest.mock('../../../hooks/useImageLoader', () => ({
  __esModule: true,
  default: () => ['waldo.png', 'test.png', 'test2.png'],
}));

describe('Characters', () => {
  it('renders all three characters images', async () => {
    await act(async () =>
      render(<Characters characters={mProps.characters} />)
    );
    await waitFor(() => {
      expect(screen.queryAllByRole('img')).toHaveLength(3);
    });
  });
  it('character that is missing in props (is found) is transparent', async () => {
    await act(async () =>
      render(<Characters characters={mProps.characters} />)
    );
    const img = screen.getByRole('img', { name: /odlaw/i });
    expect(img).toHaveStyle('opacity: 0.25');
  });
});
