import { render } from '@testing-library/react';
import React from 'react';
import { Jobs } from '.';

describe('Jobs component', () => {
  it('render complete', () => {
    const { getByText } = render(<Jobs />);

    expect(getByText('Jobs'));
  });
});
