import { render } from '@testing-library/react';
import React from 'react';
import { Social } from '.';

describe('Social component', () => {
  it('render complete', () => {
    const { getByTitle } = render(<Social />);

    expect(getByTitle('social-medias'));
  });
});
