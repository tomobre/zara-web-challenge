import { render, screen } from '@testing-library/react';
import ComicCard from '@/app/components/details/ComicCard';
import React from 'react';
import '@testing-library/jest-dom';

describe('ComicCard Component', () => {
  it('renders properly', () => {
    render(<ComicCard />);

    const main = screen.getByRole('img');

    expect(main).toBeInTheDocument();
  });
});
