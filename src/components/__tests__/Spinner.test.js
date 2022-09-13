import { render, screen } from '@testing-library/react';
import Spinner from '../Spinner';
import '@testing-library/jest-dom';

describe('Spinner', () => {
  it('renders', () => {
    render(<Spinner />);
    const spinner = screen.getByTitle('Loading');
    expect(spinner).toBeInTheDocument();
  });
});
