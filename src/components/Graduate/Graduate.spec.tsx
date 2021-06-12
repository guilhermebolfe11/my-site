import { render, screen } from '@testing-library/react';
import React from 'react';
import { Graduate } from '.';

describe('Graduate component', () => {
  it('render complete', () => {
    render(<Graduate />);
    expect(screen.getByText('Graduate'));
  });
});
