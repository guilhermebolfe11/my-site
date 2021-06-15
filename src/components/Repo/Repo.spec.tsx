import { render } from '@testing-library/react';
import React from 'react';
import { Repo } from '.';

describe('Repo component', () => {
  it('render complete', () => {
    const { getByText } = render(
      <Repo
        repo={{
          html_url: '',
          id: 1132,
          description: '',
          name: '',
        }}
      />,
    );

    expect(getByText('Repo'));
  });
});
