import chatService from '../api/chatrequests'

interface propTypes{
  haiku: string
  promts: string[]
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

  if (props.haiku === '' && props.promts.length > 0) {
    return (
      <button onClick={() => createHaiku()} className='createHaiku'>Create</button>
    )
  }

  if (props.haiku !== '') {
    return (
      <button onClick={() => removeHaiku()} className='clearHaiku'>Clear</button>
    )
  }

  return null
}