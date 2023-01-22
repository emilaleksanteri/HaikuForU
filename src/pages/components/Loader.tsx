export default function Loader(props: any) {
  if (props.loading === true) {
    return (
      <div className="loadeContainer">
        <div className="item">
			<i className="loader --1"></i>
		</div>
      </div>)
  }

  return null
}