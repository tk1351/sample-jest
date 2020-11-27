import React, { useState } from 'react'

const RenderInput = ({ outputConsole }) => {
  const [input, setInput] = useState('')
  const outputValue = () => {
    if (input) {
      outputConsole(input)
    }
  }
  
  const updateValue = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter" 
        value={input} 
        onChange={updateValue} 
      />
      <button onClick={outputValue}>Console</button>
    </div>
  )
}

export default RenderInput
