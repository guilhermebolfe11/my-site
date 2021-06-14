import { render } from '@testing-library/react';
import React from 'react';
import { Technologies } from '.';

describe('Technologies component', () => {
  it('render complete', () => {
    const { getByText } = render(<Technologies />);

    expect(getByText('Technologies'));
  });
});
