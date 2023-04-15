
function HelloWorld(props) {
  return(
    <div>
      <h1> Hello, World {props.message}</h1>
      <ArrayList index={props.index} numArray={props.numArray}/>
    </div>
  )
}

function ArrayList(props){
  return (
    <div>
      <p> Array index: {props.index} and value: {props.numArray[props.index]}</p>
    </div>
  )
}

export default HelloWorld;
