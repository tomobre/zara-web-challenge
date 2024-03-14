import { render, screen } from '@testing-library/react';
import NavBar from '@/app/components/navbar/NavBar';
import React from 'react';
import '@testing-library/jest-dom';

describe('NavBar Component', () => {
  it('renders properly', () => {
    render(<NavBar />);

    const main = screen.getByRole('img');

    expect(main).toBeInTheDocument();
  });
});
