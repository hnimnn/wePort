import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react ', () => {
  render(<App />);
  const element = screen.getAllByText(/learn react/i);
  expect(element).toBeInTheDocument();
});

