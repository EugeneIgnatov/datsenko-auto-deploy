import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the corect content ', () => {
  const { container } = render(<App />);

  expect(container.firstChild).toMatchSnapshot();
});
