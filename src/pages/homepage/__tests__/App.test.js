import { getByRole, render, screen } from '@testing-library/react';
import Homepage from '../Homepage';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders', () => {
    render(<Homepage />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
