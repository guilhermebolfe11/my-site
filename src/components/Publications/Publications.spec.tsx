import { render, screen } from '@testing-library/react';
import React from 'react';
import { Publications } from '.';

describe('Publications component', () => {
  it('render complete', () => {
    render(<Publications />);
    expect(screen.getByText('Publications'));
  });
});
