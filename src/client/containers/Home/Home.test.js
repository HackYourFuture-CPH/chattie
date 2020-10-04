import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './Home';

test('Home section has correct classname', () => {
  const title = 'home';

  expect(
    render(
      <StaticRouter>
        <Home />
      </StaticRouter>,
    ).container.firstChild,
  ).toHaveClass(title);
});
