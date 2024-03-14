import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/jest-dom';
import Details from '@/app/[id]/page';

describe('Home page', () => {
  it('it should render properly', () => {
    render(<Home />);
    const header = screen.getByRole('heading');
    const textHeader = 'dddf';
    expect(header).toHaveTextContent(textHeader);
  });
});