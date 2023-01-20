import chatService from '../api/chatrequests'

interface propTypes{
  haiku: String
  promts: Array<String>
  setHaiku: any
}

export default function ClreateClear(props: propTypes) {
  const createHaiku = async () => {
      const haikuResponse: any = await chatService.responsePromt(props.promts)
      props.setHaiku(haikuResponse)
    }

  const removeHaiku = () => {
    props.setHaiku('')
  }

  if (props.haiku.length === 0) {
    return (
      <button onClick={() => createHaiku()}>Create</button>
    )
  }

  return (
    <button onClick={() => removeHaiku()}>Clear</button>
  )
}