import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';



test('button has correct initial color', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
  
  //color changes to MidnightBlue when clicked
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'MidnightBlue'});

  expect(colorButton.textContent).toBe('Change to Medium Violet Red')
  // expect(colorButton).toHaveDisplayValue('Change to MediumVioletRed');
  

});

test('initial conditions' , ()=> {
  //button is enabled
  render(<App/>);

  //color button starts red
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})
  expect(colorButton).toBeEnabled();

  //checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'});
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test('check gray color when disabled', () => {
  
  render(<App/>);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'})

  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
});


describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})