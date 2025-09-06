// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const customDictonary = {
  teh : "the",
  wrok : "work",
  fot : "for",
  exampl : "example",
};

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const spellCheck = (inputText) => {
    let words = inputText.split(" ");
    for(const word of words){
      const lowerword = word.toLowerCase();
      if(customDictonary[lowerword]){
          return `Did you mean : ${customDictonary[lowerword]} ?`;
      }
    }
    return "";
  } 

  useEffect(() => {
    if(text.trim() === ""){
      setSuggestion("");
    }else{
      let foundSuggestion = spellCheck(text);
      setSuggestion(foundSuggestion);
    }
  }, [text])

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <h2>Spell check and Auto-Corrections </h2>
      <textarea value = {text} onChange = {handleChange} placeholder = "Enter text..." row = {10} column = {50}>
      </textarea>
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default App;
