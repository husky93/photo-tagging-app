import { render, screen, act } from '@testing-library/react';
import LevelSwitch from '../components/LevelSwitch';
import '@testing-library/jest-dom/';
import * as imageLoaderHook from '../../../hooks/hooks';

jest.mock('../components/SwitchCard', () => () => (
  <div data-testid="switchcard"></div>
));

const mProps = {
  handleLevelSwitch: jest.fn(),
};

beforeEach(() => {
  jest.resetModules();
});

describe('LevelSwitch', () => {
  it('renders a a Spinner initially', () => {
    render(<LevelSwitch handleLevelSwitch={mProps.handleLevelSwitch} />);
    const spinner = screen.getByTitle('Loading');
    expect(spinner).toBeInTheDocument();
  });
  it('renders a a SwitchCard element for each level once the images load', async () => {
    const imagesLoaderGetSpy = jest
      .spyOn(imageLoaderHook, 'useImageLoader')
      .mockResolvedValueOnce(['test.jpg', 'test.jpg', 'test.jpg']);
    render(<LevelSwitch handleLevelSwitch={mProps.handleLevelSwitch} />);
    const cards = screen.queryAllByTestId('switchcard');
    expect(cards).toHaveLength(3);
  });
});
