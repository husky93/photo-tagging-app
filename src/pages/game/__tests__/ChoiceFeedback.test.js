import { render, screen } from '@testing-library/react';
import ChoiceFeedback from '../components/ChoiceFeedback';
import '@testing-library/jest-dom/';

const mProps = {
  mouseX: 7,
  mouseY: 7,
  $name: false,
};

describe('ChoiceFeedback', () => {
  it('renders wrong guess alert when no name provided', () => {
    render(
      <ChoiceFeedback
        mouseX={mProps.mouseX}
        mouseY={mProps.mouseY}
        $name={mProps.$name}
      />
    );
    const text = screen.getByText('Wrong guess, try again!');
    expect(text).toBeInTheDocument();
  });
  it('renders good guess alert when name provided', () => {
    render(
      <ChoiceFeedback
        mouseX={mProps.mouseX}
        mouseY={mProps.mouseY}
        $name={'Test'}
      />
    );
    const text = screen.getByText('You found Test!');
    expect(text).toBeInTheDocument();
  });
});
