import { useState } from 'react'
import GivePromts from './components/GivePromts'
import Promts from './components/Promts'
import DisplayHaiku from './components/DisplayHaiku'
import ClreateClear from './components/CreateClear'
import Loader from './components/Loader'

export default function Home() {
  const [promts, setPromts] = useState<string[]>([]) // params for API
  const [haiku, setHaiku] = useState<string>('') // returned from API'
  const [loading, setLoading] = useState(false)

  const removePromt = (promt: String) => {
    if (promts.length > 1) {
      setPromts(promts.filter(p => p !== promt))
    }
    setPromts([])
  }

  const haikuAboutHeader = () => {
    if (promts.length) {
      return <h3 className='haikuAbout'>Haiku About:</h3> 
    }

    return null
  }

  return (
    <div>
      <h1 className='mainheading'>Make Haikus</h1>
      <div className='introContainer'>
        <div className='mainInstructionsContainer'>
          <p className='mainInstructions'>
            Haiku is an ancient form of Japanese poetry that creates short, visual descriptions of the natural world. It is an elegant form of expression that captures a momentary observation and reflects on the beauty of the world around us.
          </p>
          <p className='mainInstructions'>
            At its core, traditional Haiku is composed of three lines of poetry that have a 5-7-5 syllable structure and feature two cutting words (kireji). Haiku often includes references to seasons and conveys a sense of appreciation or admiration for a particular moment in time.
          </p>
          <p className='mainInstructions'>
            Writing Haiku can be a simple and enjoyable way to observe and reflect on the natural beauty of the world around you. Whether you choose to record the colors of spring, the beauty of a sunset, or the calm of a peaceful winter night, Haiku can be a creative outlet to capture and cherish moments of life.
          </p>
        </div>
        <div className='svgBox'>
        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='svgContainer'>
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(109, 40, 217, 1)" offset="0%"></stop>                            
              <stop id="stop2" stopColor="rgba(221, 214, 254, 1)" offset="100%"></stop>                        
              </linearGradient>                    
            </defs>                
            <path fill="url(#sw-gradient)" d="M15.5,-21.4C20.6,-17.8,25.3,-13.8,30.4,-7.6C35.5,-1.5,40.9,6.8,39.5,13.4C38.1,20,29.9,25,22.2,29.9C14.5,34.9,7.2,39.9,-0.7,41C-8.7,42,-17.4,39,-21,32.7C-24.6,26.3,-23,16.7,-22.5,9.4C-22,2.2,-22.5,-2.6,-22.5,-8.7C-22.4,-14.8,-22,-22.2,-18.1,-26.2C-14.3,-30.2,-7.2,-30.8,-0.9,-29.5C5.3,-28.2,10.5,-25,15.5,-21.4Z"
              transform="translate(50 50)" className='svgBlob' strokeWidth="0" stroke="url(#sw-gradient)">
            </path>              
          </svg>
        </div>
      </div>
      <GivePromts setPromts={setPromts} promts={promts} />

      {
        haikuAboutHeader()
      }
      <div className='promtContainerAll'>
        {
        promts.length
          ? promts.map((prompt: string) => (
          <Promts key={prompt} prompt={prompt} setPromts={setPromts} removePromt={removePromt}/>
          ))
          : null
       }
      </div>
      <Loader loading={loading} />
      <DisplayHaiku haiku={haiku} />
      <ClreateClear setLoading={setLoading} haiku={haiku} setHaiku={setHaiku} promts={promts} />
    </div>
  )
}
