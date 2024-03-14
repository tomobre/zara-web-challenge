import { render } from '@testing-library/react';
import ScrollComic from '@/app/components/details/ScrollComic';
import React from 'react';
import '@testing-library/jest-dom';

describe('ScrollComic Component', () => {
  it('renders component', () => {
    const scroll = render(<ScrollComic />);
    expect(scroll.baseElement).toBeInTheDocument();
  });
});
