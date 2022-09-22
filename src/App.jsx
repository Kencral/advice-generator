import { useState, useEffect } from 'react'
import './App.css'
import dice from "./assets/icon-dice.svg";
import dividerMovil from "./assets/pattern-divider-mobile.svg";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";


function App() {
   const [advice, setAdvice] = useState({});

  function getAdvice() {
    fetch("https://api.adviceslip.com/advice", {cache: "no-store"})
      .then( response => response.json())
      .then( data => {
        setAdvice(data.slip)
      })
  }
  useEffect(() => getAdvice, [])

  return (
    <div className="card">
      <h3 className="card-title">{`Advice #${advice.id}`}</h3>
      <div className="card-body">
        <p className="card-body">{advice.advice}</p>
        <img src={dividerMovil} className="divider-movil"/>
        <img src={dividerDesktop} className="divider-desktop"/>
      </div>
      <button onClick={getAdvice}>
        <img src={dice} alt="dice" />
      </button>
    </div>
  )
}

export default App
