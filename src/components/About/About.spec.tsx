import { render, screen } from '@testing-library/react';
import React from 'react';
import { About } from '.';

describe('About component', () => {
  it('render complete', () => {
    render(<About />);
    screen.getByText('About');
  });
});
