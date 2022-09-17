import { render, screen } from '@testing-library/react';
import ScoreList from '../components/ScoreList';
import '@testing-library/jest-dom/';

jest.mock('../components/ScoreItem', () => ({
  ScoreItem: (props) => <li data-testid="listitem">{props.score}</li>,
}));

const mProps = {
  data: [
    { name: 'bob', time: '2:34' },
    { name: 'bob', time: '1:34' },
    { name: 'bob', time: '0:34' },
  ],
};

describe('ScoreList', () => {
  it('renders a list item for all provided objects inside data array passed to props', () => {
    render(<ScoreList data={mProps.data} />);
    const items = screen.queryAllByTestId('listitem');
    expect(items).toHaveLength(3);
  });
  it('renders sorted list with lowest time first', () => {
    render(<ScoreList data={mProps.data} />);
    const items = screen.queryAllByTestId('listitem');
    expect(items[0].textContent).toBe('0:34');
    expect(items[1].textContent).toBe('1:34');
    expect(items[2].textContent).toBe('2:34');
  });
});
