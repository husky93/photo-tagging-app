import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

describe('Header', () => {
  it('renders', () => {
    renderWithRouter(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
  it('has a creator contribution', () => {
    renderWithRouter(<Footer />);
    const contribution = screen.getByText(/created by/i);
    expect(contribution).toBeInTheDocument();
  });
  it('has a gh link', () => {
    renderWithRouter(<Footer />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });
});
