import { render, screen } from '@testing-library/react';
import ResultCount from '@/app/components/ResultCount';
import React from 'react';
import '@testing-library/jest-dom';

describe('ResultCount Component', () => {
  it('renders properly', () => {
    render(<ResultCount />);

    const main = screen.getByRole('img');

    expect(main).toBeInTheDocument();
  });
});
