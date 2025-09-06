// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const customDictionary = {
  teh : "the",
  wrok : "work",
  fot : "for",
  exampl : "example",
};

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const spellCheck = (inputText) => {
    const words = inputText.split(" ");
    for(const word of words){
      const lowerword = word.toLowerCase();
      if(customDictionary[lowerword]){
          return `Did you mean: ${customDictionary[lowerword]}?`;
      }
    }
    return "";
  } 

  useEffect(() => {
    if(text.trim() === ""){
      setSuggestion("");
    }else{
      const foundSuggestion = spellCheck(text);
      setSuggestion(foundSuggestion);
    }
  }, [text])

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <h2>Spell check and Auto-Correction </h2>
      <textarea value = {text} 
      onChange = {handleChange} 
      placeholder = "Enter text..." 
      rows = {10} cols = {50}
       />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default App;
