import './App.css';
import Top from "./components/Top/Top"

import Result from './components/Results/Results';
import Rules from './components/Rules/Rules';

import { useState } from 'react';

function App() {
  
  const[choice] = useState("");
  const[score,setScore] = useState(0);

  return (
    <div className="Page">
      <Top score={score}/>
      <Result choice={choice} setScore={setScore}/>
      <Rules/>
    </div>
  )
}

export default App;
