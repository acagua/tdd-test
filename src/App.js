import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [buttonColor, setButtonColor] = useState('red')
  const [checked, setChecked] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <button 
        style={{backgroundColor: checked? 'gray' : buttonColor}}
        onClick={()=>setButtonColor(newButtonColor)}
        disabled={checked}
      >
          Change to {newButtonColor}
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
