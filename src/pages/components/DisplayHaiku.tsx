interface propTypes{
  haiku: String
}

export default function DisplayHaiku(props : propTypes) {
  const haikuSplit = props.haiku.split(',') // So haiku can be displayed on 3 lines
  
  if (props.haiku.length > 0) {
    return (
      <div>
        <h3>Haiku for you:</h3>
        {haikuSplit.map(haiku => (
          <ul key={haiku}>{haiku}</ul>
        ))}
      </div>
    )
  }
  return null
}