import React from 'react';
import {render} from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from './App';
import Dashboard, {addBalls, addStrikes} from './Components/Dashboard';

test('App renders without crashing', () => {
  render(<App />);
});

test('addBalls adds 1 to the balls score', () => {
  expect(addBalls(1)).toBe(2);
  expect(addBalls(2)).toBe(3);
});

test('addSrikes adds 1 to the strikes score', () => {
  expect(addStrikes(1)).toBe(2);
  expect(addStrikes(2)).toBe(3);
});

test('contains hit button', () => {
  const {getByTestId} = render(<Dashboard />);
  getByTestId(/hit/i);
});