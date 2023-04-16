import React from 'react';

function PostButton(props){
  var style = {
    width: 25,
    heigth: 50

  }
  return(
    <button style={style} onClick={()=> props.handleClick()}> {props.text}</button>
  )
}

function PostText(props){
  var style = {
    width: props.width,
    heigth: 50,
    border: "1px solid black",


  }
  return(
    <div style={style}>{props.text}</div>
  )
}
function Posts(props){
  var style={
    display: "flex"
  }
  return(
    <div style={style}>
      <PostButton text="x" handleClick={props.removeItem}/>
      <PostText width="200" text={props.title}/>
      <PostButton text="+" handleClick={props.incrementScore}/>
      <PostText width="20" text={props.score}/>
      <PostButton text="-" handleClick={props.decrementScore}/>
    </div>
  )
}


function PostList(props){
  return(
    <ol>
      {
        props.postarray.map((item, index)=> <Posts key={index} title={item.title} score={item.score} incrementScore={() =>props.updateScore(index, 1)} decrementScore={()=>props.updateScore(index, -1)} removeItem={()=>props.removeItem(index)}/>)

      }

    </ol>
    
  )
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {value: '', items:[]}
  }

  handleEvent(event){
    this.setState({value: event.target.value})
  }

  addItem(){
    var itemsCopy = this.state.items.slice()
    var turncatedString = this.state.value.substring(0,20)
    console.log(turncatedString, this.state.value)
    itemsCopy.push({title: turncatedString, score: 0})
    itemsCopy.sort((a,b)=> {
      return b.score - a.score
    })
    console.log(itemsCopy)
    this.setState({items: itemsCopy, value: ""})
  }
  updateScore(index, val){
    var itemsCopy = this.state.items.slice()
    itemsCopy[index].score += val
    itemsCopy.sort((a,b)=> {
      return b.score - a.score
    })
    this.setState({items: itemsCopy, value: ""})

  }
  removePost(index){
    var itemsCopy = this.state.items.slice()
    itemsCopy.splice(index, 1)
    itemsCopy.sort((a,b)=> {
      return b.score - a.score
    })
    this.setState({items: itemsCopy, value: ""})
  }


  render(){
    return(
        <div>
          <div>
            <input type="text" value={this.state.value} onChange={this.handleEvent.bind(this)}/>
            <button onClick={()=> {this.addItem()}}>Submit</button>
          </div>
          <PostList postarray={this.state.items} updateScore={this.updateScore.bind(this)} removeItem={this.removePost.bind(this)}/>
        </div>
      
    )
  }
}

export default App;