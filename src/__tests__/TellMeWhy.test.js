import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import TellMeWhy from '../components/TellMeWhy';

// afterEach(cleanup);

test('renders correct ellements', () => {
  const { getByText } = render(<TellMeWhy />);
  // debug();
  getByText('Tell me why you gave me such a hard topic to learn?');
  getByText('Because I care');
  getByText('Because I want you to suffer');
  getByText('Care Vote');
  getByText('Suffer Vote');
});

test('allow user to add <p> after onclick', () => {
  const { getByTestId, getByText } = render(<TellMeWhy />);

  fireEvent.click(getByTestId('careBtn'));
  expect(getByText('Well let me see those abs then!')).toBeInTheDocument();

  fireEvent.click(getByTestId('sufferBtn'));
  expect(getByText('Well I still wanna see those abs!')).toBeInTheDocument();
  //do not know how to check if another click happend and it is not in document
});
