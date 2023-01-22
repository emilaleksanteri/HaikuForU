import chatService from '../api/chatrequests'
import { useState } from 'react'

interface propTypes{
  haiku: String
  promts: Array<String>
  setHaiku: any
  setLoading: any
}

export default function ClreateClear(props: propTypes) {
  const createHaiku = async () => {
      props.setLoading(true)
      const haikuResponse: any = await chatService.responsePromt(props.promts)
      props.setLoading(false)
      props.setHaiku(haikuResponse)
    }

  const removeHaiku = () => {
    props.setHaiku('')
  }

  if (props.haiku.length === 0 && props.promts.length > 0) {
    return (
      <button onClick={() => createHaiku()} className='createHaiku'>Create</button>
    )
  }

  if (props.haiku.length > 0) {
    return (
      <button onClick={() => removeHaiku()} className='clearHaiku'>Clear</button>
    )
  }

  return null
}