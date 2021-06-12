import { render } from '@testing-library/react';
import React from 'react';
import { Projects } from '.';

describe('Projects component', () => {
  it('render complete', () => {
    const { getByText } = render(<Projects />);

    expect(getByText('Projects'));
  });
});
