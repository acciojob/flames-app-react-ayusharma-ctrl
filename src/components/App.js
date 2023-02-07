import React, { useState } from 'react'
import './App.css';

function App() {
  const [input1, setInput1] = useState("")

  const [input2, setInput2] = useState("")

  function result() {
    if (input1 !== '' && input2 !== '') {
      var a = input1.toLowerCase().trim()
      var b = input2.toLowerCase().trim()
      for (let i = 0; i < a.length; i++) {
        var count = false
        for (let j = 0; j < b.length; j++) {
          if(a[i]===b[j]){
            b = b.replace(b[j],"")
            count = true
          }
        }
        if(count){
          a = a.replace(a[i],"")
          i= i-1
        }
      }
      const sum = a.length + b.length
      const mod = sum%6;
      flames(mod)
    }
  }

  function flames(value){
    const heading = document.getElementById("h3")
    switch(value){
      case 1: heading.textContent = 'Friends'
      break;
      case 2: heading.textContent = 'Love'
      break;
      case 3: heading.textContent = 'Affection'
      break;
      case 4: heading.textContent = 'Marriage'
      break;
      case 5: heading.textContent = 'Enemy'
      break;
      default: heading.textContent = 'Siblings'
    }
  }

  function clear(){
    setInput1("")
    setInput2("")
    document.getElementById('input1').value = ''
    document.getElementById('input2').value = ''
    document.getElementById("h3").textContent = ''
  }

  return (
    <div className="App">
      <div>
        <input type="text" id='input1' placeholder='First Name' data-testid="input1" onChange={(e) => { setInput1(e.target.value) }} />
      </div>
      <div>
        <input type="text" id='input2' placeholder='Second Name' data-testid="input2" onChange={(e) => { setInput2(e.target.value) }} />
      </div>
      <div>
        <button type="submit" data-testid="calculate_relationship" onClick={result}>Calculate Relationship Future</button>
      </div>
      <h3 data-testid="answer" id="h3"> </h3>
      <button type="submit" data-testid="clear" onClick={clear}>Clear</button>
    </div>
  );
}

export default App;

