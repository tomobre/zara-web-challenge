import { render, screen } from '@testing-library/react';
import Wrapper from '@/app/components/Wrapper';
import React from 'react';
import '@testing-library/jest-dom';

describe('Wrapper Component', () => {
  it('renders properly', () => {
    render(<Wrapper />);

    const main = screen.getByRole('img');

    expect(main).toBeInTheDocument();
  });
});
