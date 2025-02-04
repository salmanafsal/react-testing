/** @jest-environment jsdom */
import React, {useState} from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', async () => {
  // TODO: change the expect to actually test something 😉

  render(<App />)
  const themeButton = screen.getByText(/Current theme:/i);
  const toggleButton = screen.getByText(/Show hidden content/i);

  expect(themeButton).toBeInTheDocument();
  expect(toggleButton).toBeInTheDocument();



  await userEvent.click(themeButton);
  expect(screen.getByText(/Current theme: dark/i)).toBeInTheDocument();

  await userEvent.click(toggleButton);
  expect(screen.getByText(/Hide hidden content/i)).toBeInTheDocument();


});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', async() => {
  // TODO: change the expect to actually test something 😉
  render(<App />)
  const themeButton = screen.getByText(/Current theme: light/i);
  expect(themeButton).toBeInTheDocument();
  await userEvent.click(themeButton);
  expect(screen.getByText(/Current theme: dark/i)).toBeInTheDocument();


});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', async () => {

  render(<App />)

  expect(document.body.style.backgroundColor).toBe('rgb(255, 255, 255)');
  expect(document.body.style.color).toBe('rgb(51, 51, 51)');

  const themeButton = screen.getByText(/Current theme: light/i);
  
  await userEvent.click(themeButton);

  // Check if styles changed after clicking
  expect(document.body.style.backgroundColor).toBe('rgb(51, 51, 51)');
  expect(document.body.style.color).toBe('rgb(255, 255, 255)');
  
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', async() => {
  // TODO: change the expect to actually test something 😉

  render(<App />)
  const toggleButton = screen.getByText(/Show hidden content/i);
  expect(toggleButton).toBeInTheDocument();

  await userEvent.click(toggleButton);
  expect(screen.getByText(/Hide hidden content/i)).toBeInTheDocument();
});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
