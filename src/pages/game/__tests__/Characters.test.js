import { render, screen, act, waitFor } from '@testing-library/react';
import Characters from '../components/Characters';
import '@testing-library/jest-dom/';

const mProps = {
  characters: [{ name: 'Waldo' }, { name: 'Wizard' }],
};

jest.mock('../../../hooks/hooks', () => ({
  useImageLoader: () => ['waldo.png', 'test.png', 'test2.png'],
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
  it('renders name for each character', async () => {
    await act(async () =>
      render(<Characters characters={mProps.characters} />)
    );
    const waldo = screen.getByText('Waldo');
    const odlaw = screen.getByText('Odlaw');
    const wizard = screen.getByText('Wizard');

    expect(waldo).toBeInTheDocument();
    expect(odlaw).toBeInTheDocument();
    expect(wizard).toBeInTheDocument();
  });
});
