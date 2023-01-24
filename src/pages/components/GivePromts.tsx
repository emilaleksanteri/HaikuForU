import React, { useState } from "react"
interface propTypes{
  promts: any
  setPromts: any
}

export default function GivePromts(props: propTypes) {
  const [param, setParam] = useState('') // these will be added to an array of parameters given to the API

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const findDulplicate = props.promts.find((p: string) => p === param)
    if (!findDulplicate && param !== '') { // do not allow duplicates and empty strings
      props.setPromts(props.promts.concat(param))
    }
    setParam('')
  }
  return (
    <div className='topicsInputContainer'>
      <form onSubmit={handleSubmit} className='topicsForm'>
        <label className='topicsLabel'>
          Topic:
        </label>
        <input className="topicsInput"
          type='text'
          value={param}
          onChange={handleChange}
          name='param'
          placeholder="Haiku about..."
        />
        <button type="submit" className="topicsSubmit">Add</button>
      </form>
      {
      props.promts.length > 0 
        ? <button onClick={() => props.setPromts([])} className='topicsClear'>Clear</button> 
        : null}
    </div>
  )
}