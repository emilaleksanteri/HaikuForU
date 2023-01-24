import React, { useState } from "react"
interface propTypes{
  promts: string[]
  setPromts: any
}

const ShowRemoveBtn = ({promts, setPromts}:propTypes) => {
  const checkUndefinedLengthFix = () => {
    if (promts === undefined || !promts.length) {
      return false
    }
    return true
  }

  if (checkUndefinedLengthFix() === true) {
    return (
      <button onClick={() => setPromts([])} className='topicsClear'>Clear</button>
    )
  }
  return <div className="placeHolderForClear">Clear</div>
}

export default function GivePromts(props: propTypes) {
  const [param, setParam] = useState<string>('') // these will be added to an array of parameters given to the API

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const findDulplicate = props.promts.find((p: string) => p === param)
    if (!findDulplicate && param !== '' && props.promts.length < 5) { // do not allow duplicates and empty strings
      props.setPromts(props.promts.concat(param))
    }
    setParam('')
  }
  return (
    <div className='topicsInputContainer'>
      <div className="spacesInput"></div>
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
      <ShowRemoveBtn promts={props.promts} setPromts={props.setPromts} />
    </div>
  )
}