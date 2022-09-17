import { render, screen } from '@testing-library/react';
import SwitchCard from '../components/SwitchCard';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/';

const mProps = {
  imgSrc: 'test.js',
  text: 'Test',
  handleClick: jest.fn(),
};

describe('SwitchCard', () => {
  it('renders a card element', () => {
    render(
      <SwitchCard
        imgSrc={mProps.imgSrc}
        text={mProps.text}
        handleClick={mProps.handleClick}
      />
    );
    const card = screen.getByRole('figure');
    expect(card).toBeInTheDocument();
  });
  it('has an image', () => {
    render(
      <SwitchCard
        imgSrc={mProps.imgSrc}
        text={mProps.text}
        handleClick={mProps.handleClick}
      />
    );
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
  it('has an caption', () => {
    render(
      <SwitchCard
        imgSrc={mProps.imgSrc}
        text={mProps.text}
        handleClick={mProps.handleClick}
      />
    );
    const caption = screen.getByText('Test');
    expect(caption).toBeInTheDocument();
  });
  it('on click calls the click handler provided in props', () => {
    render(
      <SwitchCard
        imgSrc={mProps.imgSrc}
        text={mProps.text}
        handleClick={mProps.handleClick}
      />
    );
    const card = screen.getByRole('figure');
    userEvent.click(card);
    expect(mProps.handleClick).toBeCalledTimes(1);
  });
});
