interface propTypes{
  haiku: string
}

export default function DisplayHaiku(props : propTypes) {
  if (props.haiku !== '') {
    const haikuSplit = props.haiku.split(',') // So haiku can be displayed on lines
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