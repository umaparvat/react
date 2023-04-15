

function App(props){
  const currdate = new Date();
  return (
    <p> the current date and time now is {currdate.toDateString()} {currdate.toLocaleTimeString()}</p>
  )
}

export default App;