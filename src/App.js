// import React, {useState} from 'react';
import React from 'react';
import './App.css';

import Intervalo from './components/Intervalo'
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {
  // const [min, setMin] = useState(1)
  // const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h4>Exercício React-Redux (Simples)</h4>
      <div className="linha">
        {/* <Intervalo min={min} max={max} onMinChange={setMin} onMaxChange={setMax}></Intervalo> */}
        <Intervalo></Intervalo>
      </div>

      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
        {/* <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio> */}
      </div>
    </div>
  );
}

export default App;
