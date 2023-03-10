interface propTypes{
  prompt: string
  setPromts: any
  removePromt: any
}

export default function Promts(props: propTypes) {
  return(
    <div className="animationPromt">
      <div className="promt" id="promt">
        <p className="promtText">{props.prompt}</p>
        <button className="removeBtnPromt" onClick={() => props.removePromt(props.prompt)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="removeSvg" id='svgX'>
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  )
}