import { getByRole, render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders', () => {
    render(<App />);
    const app = screen.getByRole('main');
    expect(app).toBeInTheDocument();
  });
});
