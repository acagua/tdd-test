import './App.css';
import { useState } from 'react';

export const PRIMARY_COLOR = 'MediumVioletRed';
export const SECONDARY_COLOR = 'MidnightBlue';
export const DISABLED_COLOR = 'gray';

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [buttonColor, setButtonColor] = useState(PRIMARY_COLOR)
  const [checked, setChecked] = useState(false)
  const newButtonColor = buttonColor === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR;

  return (
    <div className="App">
      <button 
        style={{backgroundColor: checked? DISABLED_COLOR : buttonColor}}
        onClick={()=>setButtonColor(newButtonColor)}
        disabled={checked}
      >
          Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input 
        type ="checkbox"
        id="disabled-button-checked"
        defaultChecked={checked}
        aria-checked={checked}
        onChange={({target}) => {setChecked(target.checked)}}/>
        <label htmlFor="disabled-button-checked">Disable Button</label>
    </div>
  );
}

export default App;
