import logo from './logo.svg';
import './App.css';

import Ascent from './image/Ascent.webp'
import Bind from './image/Bind.webp'
import Breeze from './image/Breeze.webp'
import Fracture from './image/Fracture.webp'
import Haven from './image/Haven.webp'
import Icebox from './image/Icebox.webp'
import Lotus from './image/Lotus.webp'
import Pearl from './image/Pearl.webp'
import Split from './image/Split.webp'
import Sunset from './image/Sunset.webp'

import { useEffect, useState } from 'react';

function App() {
  
  const mapsValorantData = [
    {
      name: 'Ascent',
      image: Ascent
    },
    {
      name: 'Bind',
      image: Bind
    },
    {
      name: 'Breeze',
      image: Breeze
    },
    {
      name: 'Fracture',
      image: Fracture
    },
    {
      name: 'Haven',
      image: Haven
    },
    {
      name: 'Icebox',
      image: Icebox
    },
    {
      name: 'Lotus',
      image: Lotus
    },
    {
      name: 'Pearl',
      image: Pearl
    },
    {
      name: 'Split',
      image: Split
    },
    {
      name: 'Sunset',
      image: Sunset
    },
  ]
  const [result, setResult] = useState(mapsValorantData[0])


  const RandomPick = () => {
    setResult(mapsValorantData[Math.floor(Math.random() * mapsValorantData.length)])
  }

  return (
    <div className="App">
      {result && (
        <div className='CardMap'>
          <h1>{result.name}</h1>
          <img className='ImageMap' src={result.image} />
        </div>
      )}
      <button className='buttonMap' onClick={RandomPick}>Randomize</button>
    </div>
  );
}

export default App;
