import { render, screen, waitFor } from '@testing-library/react';
import Modal from '../components/Modal';
import '@testing-library/jest-dom/';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mProps = {
  time: '0:00',
};

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

describe('Modal', () => {
  it('renders a heading', () => {
    renderWithRouter(<Modal time={mProps.time} />);
    const heading = screen.getByRole('heading', {
      name: 'You completed this level in:',
    });
    expect(heading).toBeInTheDocument();
  });
  it('renders provided time', () => {
    renderWithRouter(<Modal time={mProps.time} />);
    const text = screen.getByText('0:00');
    expect(text).toBeInTheDocument();
  });
  it('renders an input', () => {
    renderWithRouter(<Modal time={mProps.time} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  it('renders a button', () => {
    renderWithRouter(<Modal time={mProps.time} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('input works as intended', () => {
    renderWithRouter(<Modal time={mProps.time} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
  });
  it('button on click doesnt do anything when input is empty', () => {
    renderWithRouter(<Modal time={mProps.time} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(screen.queryByTitle('Loading')).not.toBeInTheDocument();
  });
  it('button on click posts a database request and renders a spinner if input is not empty', async () => {
    renderWithRouter(<Modal time={mProps.time} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    userEvent.type(input, 'test');
    userEvent.click(button);
    expect(screen.getByTitle('Loading')).toBeInTheDocument();
  });
  it('button on click navigates to Highscores page after submitting score', async () => {
    renderWithRouter(<Modal time={mProps.time} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    userEvent.type(input, 'test');
    userEvent.click(button);
    await waitFor(
      () => {
        expect(window.location.pathname).toBe('/highscores');
      },
      { timeout: 2100 }
    );
  });
});
