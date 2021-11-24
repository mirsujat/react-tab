import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => cleanup)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Accessibile React Tabs Component/i);
  expect(linkElement).toBeInTheDocument();
});
