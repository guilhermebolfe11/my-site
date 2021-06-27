import { render,screen } from '@testing-library/react';
import React from 'react';
import { Social } from '.';

describe('Social component', () => {
  it('render complete', () => {
     render(<Social />);

    expect(screen.getByTitle('GitHub'));
  });
});
