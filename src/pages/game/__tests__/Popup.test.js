import { render, screen } from '@testing-library/react';
import Popup from '../components/Popup';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/';

const mProps = {
  characters: [{ name: 'Waldo' }],
  mouseX: 0,
  mouseY: 0,
  handleClick: jest.fn(),
};

describe('Popup', () => {
  it('renders', () => {
    render(
      <Popup
        handleClick={mProps.handleClick}
        characters={mProps.characters}
        mouseX={mProps.mouseX}
        mouseY={mProps.mouseY}
      />
    );
    const popup = screen.getByRole('dialog');
    expect(popup).toBeInTheDocument();
  });
  it('renders a provided character options', () => {
    render(
      <Popup
        handleClick={mProps.handleClick}
        characters={mProps.characters}
        mouseX={mProps.mouseX}
        mouseY={mProps.mouseY}
      />
    );
    const char = screen.getByText(/waldo/i);
    expect(char).toBeInTheDocument();
  });
  it('calls provided click callback on click', () => {
    render(
      <Popup
        handleClick={mProps.handleClick}
        characters={mProps.characters}
        mouseX={mProps.mouseX}
        mouseY={mProps.mouseY}
      />
    );
    const popup = screen.getByRole('dialog');
    userEvent.click(popup);
    expect(mProps.handleClick).toBeCalledTimes(1);
  });
});
