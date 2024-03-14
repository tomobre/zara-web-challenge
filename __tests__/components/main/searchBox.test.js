import { render, screen } from '@testing-library/react';
import SearchBox from '@/app/components/SearchBox';
import React from 'react';
import '@testing-library/jest-dom';

describe('SearchBox Component', () => {
  it('renders properly', () => {
    render(<SearchBox />);

    const main = screen.getByRole('img');

    expect(main).toBeInTheDocument();
  });
});
