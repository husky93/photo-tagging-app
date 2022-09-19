import { render, screen } from '@testing-library/react';
import ScoreItem from '../components/ScoreItem';
import '@testing-library/jest-dom/';

const mProps = {
  number: 1,
  name: 'Test',
  time: '0:05',
};

describe('ScoreItem', () => {
  it('renders a number', () => {
    render(
      <ScoreItem number={mProps.number} name={mProps.name} time={mProps.time} />
    );
    const num = screen.getByText('1.');
    expect(num).toBeInTheDocument();
  });
  it('renders a provided player name', () => {
    render(
      <ScoreItem number={mProps.number} name={mProps.name} time={mProps.time} />
    );
    const name = screen.getByText('Test');
    expect(name).toBeInTheDocument();
  });
  it('renders players time', () => {
    render(
      <ScoreItem number={mProps.number} name={mProps.name} time={mProps.time} />
    );
    const time = screen.getByText('0:05');
    expect(time).toBeInTheDocument();
  });
});
