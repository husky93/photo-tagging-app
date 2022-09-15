import { render, screen } from '@testing-library/react';
import CustomCursor from '../components/CustomCursor';
import '@testing-library/jest-dom/';

const mProps = {
  mouseX: 3,
  mouseY: 2,
  $display: true,
};

describe('CustomCursor', () => {
  it('renders', () => {
    render(<CustomCursor mouseX={mProps.mouseX} mouseY={mProps.mouseY} />);
    const cursor = screen.getByTitle(/custom cursor/i);
    expect(cursor).toBeInTheDocument();
  });
  it('changes position based on props', () => {
    render(<CustomCursor mouseX={mProps.mouseX} mouseY={mProps.mouseY} />);
    const cursor = screen.getByTitle(/custom cursor/i);
    expect(cursor).toHaveStyle('position: absolute');
    expect(cursor).toHaveStyle('left: -22px');
    expect(cursor).toHaveStyle('top: -23px');
  });
});
