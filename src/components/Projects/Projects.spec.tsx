import { render, screen } from '@testing-library/react';
import React from 'react';
import { Projects } from '.';

describe('Projects component', () => {
  it('render complete', () => {
    render(<Projects repos={[
      {
        html_url: '',
        id: 1132,
        description: '',
        name: 'Repo-Test',
        pushed_at: new Date().toISOString(),
        language: '',
      },
      {
        html_url: '',
        id: 1162,
        description: '',
        name: 'Repo-Test2',
        pushed_at: new Date().toISOString(),
        language: '',
      }
    ]}/>);

    expect(screen.getByText('Repo-Test'));
  });
});
