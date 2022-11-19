import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Item from './Item';

test('should render item component', () => {
  render(<Item />);
  const divElement = screen.getByTestId('item');
  expect(divElement).toBeInTheDocument();
  expect(divElement).not.toContainHTML('<img>');
});
