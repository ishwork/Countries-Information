import { render, screen } from '@testing-library/react';

import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  const mockOnChange = jest.fn();

  it('renders the search input field', async () => {
    render(<SearchBar onChange={mockOnChange} />);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders the span element with correct text', () => {
    render(<SearchBar onChange={mockOnChange} />);

    const spanElement = screen.getByText('Search for a country');
    expect(spanElement).toBeInTheDocument();
  });

});