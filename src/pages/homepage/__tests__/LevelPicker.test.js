import { render, screen } from '@testing-library/react';
import LevelPicker from '../components/LevelPicker';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('LevelPicker', () => {
  it('renders', () => {
    render(
      <Router>
        <LevelPicker imgSrc="test.jpg" text="Level One" path="level-one" />
      </Router>
    );
    const figure = screen.getByRole('figure');
    expect(figure).toBeInTheDocument();
  });
  it('renders text element with specified text prop', () => {
    render(
      <Router>
        <LevelPicker imgSrc="test.jpg" text="Level One" path="level-one" />
      </Router>
    );
    const text = screen.getByText('Level One');
    expect(text).toBeInTheDocument();
  });
  it('redirects to a new path on click', () => {
    render(
      <Router>
        <LevelPicker imgSrc="test.jpg" text="Level One" path="level-one" />
      </Router>
    );
    const path = window.location.pathname;
    const figure = screen.getByRole('figure');
    userEvent.click(figure);
    const newPath = window.location.pathname;
    expect(newPath).toBe(`${path}level-one`);
  });
});