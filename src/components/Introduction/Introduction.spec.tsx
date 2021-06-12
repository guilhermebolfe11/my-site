import { render, screen } from '@testing-library/react';
import React from 'react';
import { Introduction } from '.';

describe('Introduction component', () => {
  it('render complete', () => {
    render(<Introduction />);
    expect(screen.getByTitle('introduction'));
  });
});
