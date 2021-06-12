import { render } from '@testing-library/react';
import React from 'react';
import { Skills } from '.';

describe('Skills component', () => {
  it('render complete', () => {
    const { getByText } = render(<Skills />);

    expect(getByText('Skills'));
  });
});
