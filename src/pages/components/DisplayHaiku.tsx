interface propTypes{
  haiku: string
}

export default function DisplayHaiku({ haiku }: propTypes) {
  if (haiku !== '') {
    return (
      <div className="haikuContainer">
        <h3 className="haikuHeader">Haiku for you:</h3>
          <p className='haiku'>{haiku}</p>
      </div>
    )
  }
  return <></>
}