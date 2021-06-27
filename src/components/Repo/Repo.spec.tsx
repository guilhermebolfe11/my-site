import { render, screen } from '@testing-library/react';
import React from 'react';
import { Repo } from '.';

describe('Repo component', () => {
  it('render complete', () => {
   render(
      <Repo
        repo={{
          html_url: '',
          id: 1132,
          description: '',
          name: 'Repo-Test',
          pushed_at: new Date().toISOString(),
          language: '',
        }}
      />,
    );

    expect(screen.getByText('Repo-Test'));
  });
});
