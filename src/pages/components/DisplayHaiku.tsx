interface propTypes{
  haiku: String
}

export default function DisplayHaiku(props : propTypes) {
  const haikuSplit = props.haiku.split(',') // So haiku can be displayed on lines
  
  if (props.haiku.length > 0) {
    return (
      <div className="haikuContainer">
        <h3 className="haikuHeader">Haiku for you:</h3>
        {haikuSplit.map(haiku => (
          <ul key={haiku} className='haiku'>{haiku}</ul>
        ))}
      </div>
    )
  }
  return null
}