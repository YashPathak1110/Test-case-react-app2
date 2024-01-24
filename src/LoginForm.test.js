import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';
 
test('enabled button when both email and password are entered', async () => {
  render(<LoginForm />);
 
  const email = screen.getByLabelText('username');
  const password = screen.getByLabelText('password');
  const button = screen.getByRole('button');
 
  expect(button).toBeDisabled(); 
 
  userEvent.type(email, 'user@test.com');
  userEvent.type(password, 'Test1234');
 
 
});
 
test("can't submit form when button is disabled", () => {
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);
 
  const button = screen.getByRole('button'); 
 
  userEvent.click(button);
 
  expect(onSubmit).toHaveBeenCalledTimes(0);
});

test("submits form when button is clicked", () => {
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  const email = screen.getByLabelText('username');
  const password = screen.getByLabelText('password');
  const button = screen.getByRole('button');

  userEvent.type(email, 'user@test.com');
  userEvent.type(password, 'Test1234');

  userEvent.click(button);

  
});


