import { render, screen } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Header', () => {
  it('renders', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
  it('has a logo', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logo = screen.getByRole('heading', { name: /where's waldo/i });
    expect(logo).toBeInTheDocument();
  });
  it('logo on click redirects to homepage', () => {
    const history = createMemoryHistory(['/test']);
    render(
      <Router history={history}>
        <Header />
      </Router>
    );
    const logo = screen.getByRole('heading', { name: /where's waldo/i });
    userEvent.click(logo);
    expect(history.location.pathname).toBe('/');
  });
  it('renders children', () => {
    render(
      <Router>
        <Header>
          <div data-testid="div"></div>
        </Header>
      </Router>
    );
    const div = screen.getByTestId('div');
    expect(div).toBeInTheDocument();
  });
});