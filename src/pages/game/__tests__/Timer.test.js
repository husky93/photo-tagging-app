import { render, screen, act } from '@testing-library/react';
import Timer from '../components/Timer';
import '@testing-library/jest-dom/';

const mProps = {
  stop: false,
};

describe('Timer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('renders a timer', () => {
    render(<Timer stop={mProps.stop} />);
    const timer = screen.getByText('0:00');
    expect(timer).toBeInTheDocument();
  });
  it('works corerctly', async () => {
    render(<Timer stop={mProps.stop} />);
    const timer = screen.getByText('0:00');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timer.textContent).toBe('0:01');
  });
  it('stops timer when stop is true', async () => {
    render(<Timer stop={true} />);
    const timer = screen.getByText('0:00');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timer.textContent).toBe('0:00');
  });
});
