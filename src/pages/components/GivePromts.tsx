import React, { useState } from "react"
interface propTypes{
  promts: Array<String>
  setPromts: any
}

export default function GivePromts(props: propTypes) {
  const [param, setParam] = useState('') // these will be added to an array of parameters given to the API

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const findDulplicate = props.promts.find(p => p === param)
    if (!findDulplicate) { // do not allow duplicates
      props.setPromts(props.promts.concat(param))
    }
    setParam('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Topic:
          <input
            type='text'
            value={param}
            onChange={handleChange}
            name='param'
            placeholder="Haiku about..."
          />
        </div>
        <button type="submit">Add Topic</button>
      </form>
    </div>
  )
}