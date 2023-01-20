import { useState } from 'react'
import GivePromts from './components/GivePromts'
import Promts from './components/Promts'
import DisplayHaiku from './components/DisplayHaiku'
import ClreateClear from './components/CreateClear'

export default function Home() {
  const [promts, setPromts] = useState([]) // params for API
  const [haiku, setHaiku] = useState('') // returned from API

  const removePromt = (promt: String) => {
    setPromts(promts.filter(p => p !== promt))
  }

  return (
    <div>
      <h1>Make a haiku</h1>
      <p>Add as many topics as you want.</p>
      <GivePromts setPromts={setPromts} promts={promts} />

      {
      promts.length > 0
        ? <h3>Haiku about:</h3> 
        : null
      }
      
      {promts.map(prompt => (
        <Promts key={prompt} prompt={prompt} setPromts={setPromts} removePromt={removePromt}/>
      ))}
      <DisplayHaiku haiku={haiku} />
      <ClreateClear haiku={haiku} setHaiku={setHaiku} promts={promts} />
    </div>
  )
}
