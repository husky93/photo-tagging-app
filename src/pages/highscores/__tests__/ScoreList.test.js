import { render, screen } from '@testing-library/react';
import ScoreList from '../components/ScoreList';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/';

jest.mock('../components/ScoreItem', () => ({
  __esModule: true,
  default: (props) => <li data-testid="listitem">{props.time}</li>,
}));

jest.mock('polished', () => ({
  darken: () => '#fff',
}));

const mProps = {
  data: [
    { name: 'bob', time: '2:34' },
    { name: 'bob', time: '1:34' },
    { name: 'bob', time: '0:34' },
    { name: 'bob', time: '8:34' },
    { name: 'bob', time: '4:34' },
    { name: 'bob', time: '8:34' },
    { name: 'bob', time: '4:34' },
    { name: 'bob', time: '8:34' },
    { name: 'bob', time: '4:34' },
    { name: 'bob', time: '8:34' },
    { name: 'bob', time: '4:34' },
    { name: 'bob', time: '8:34' },
    { name: 'bob', time: '4:34' },
  ],
};

describe('ScoreList', () => {
  it('renders 8 first items from data props', () => {
    render(<ScoreList data={mProps.data} />);
    const items = screen.queryAllByTestId('listitem');
    expect(items).toHaveLength(8);
  });
  it('renders sorted list with lowest time first', () => {
    render(<ScoreList data={mProps.data} />);
    const items = screen.queryAllByTestId('listitem');
    expect(items[0].textContent).toBe('0:34');
    expect(items[1].textContent).toBe('1:34');
    expect(items[2].textContent).toBe('2:34');
  });
  it('has a button to the next page', () => {
    render(<ScoreList data={mProps.data} />);
    const button = screen.getByText('Next Page');
    expect(button).toBeInTheDocument();
  });
  it('initially doesnt render previous page button', async () => {
    render(<ScoreList data={mProps.data} />);
    expect(screen.queryByText('Previous Page')).not.toBeInTheDocument();
  });
  it('render Previous Page button when Next Page button is clicked', () => {
    render(<ScoreList data={mProps.data} />);
    const nextButton = screen.getByText('Next Page');
    userEvent.click(nextButton);
    const prevButton = screen.getByText('Previous Page');
    expect(prevButton).toBeInTheDocument();
  });
});
