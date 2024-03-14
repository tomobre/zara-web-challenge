import { render, screen } from '@testing-library/react';
import Card from '@/app/components/details/Card';
import React from 'react';
import '@testing-library/jest-dom';

describe('Card Component', () => {
  it('renders properly', () => {
    render(<Card />);

    const main = screen.getByRole('img');

    expect(main).toBeInTheDocument();
  });
});
