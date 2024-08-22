
import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import ValidationTextFields from './components/ValidationTextFields';

function App() {
  const [binaryString, setBinaryString] = useState<string>("");
  const [decimalString, setDecimalString] = useState<string>(binaryString);

  const handleBinaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const binaryValue = event.target.value;
    setBinaryString(binaryValue);
    setDecimalString(binaryValue);
  }

  return (
    <>
      <div className="flex items-center">
        <span className="w-20">Binary:</span>
        <input className="flex-1 border rounded p-2" type="text" value={binaryString} onChange={handleBinaryChange}/>
      </div>
      <div className="flex items-center">
        <span className="w-20">Decimal:</span>
        <input className="flex-1 border rounded p-2" type="text" value={decimalString}/>
      </div>
      <div>
        <Button>Hello</Button>
        <ValidationTextFields></ValidationTextFields>
      </div>
    </>
  )
}

export default App
