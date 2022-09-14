import { render, screen, act, waitFor } from '@testing-library/react';
import Homepage from '../Homepage';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders', async () => {
    await act(async () => render(<Homepage />));
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  it('renders spinner initially', async () => {
    render(<Homepage />);
    const spinner = screen.getByTitle('Loading');
    expect(spinner).toBeInTheDocument();
    await waitFor(async () => {
      expect(await screen.findByRole('region')).toBeInTheDocument();
    });
  });
  it('renders content when images load', async () => {
    await act(async () => render(<Homepage />));
    const section = await screen.findByRole('region');
    expect(section).toBeInTheDocument();
  });
});
