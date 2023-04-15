import React from 'react';

class Details extends React.Component {
  render() {
    return (<div><h1>{this.props.details}</h1></div>)
  }
}

class Button extends React.Component {

  render() {
    return (
      <div>
        <button style= {{color: this.props.active? "red": "blue"}} onClick={() => {this.props.clickHandler(this.props.id, this.props.name)}}>
          {this.props.name}
        </button>
      </div>
    )
  }
}


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { activeArray: [0,0,0,0],  details: ""}
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(id, details) {
    var arr = [0,0,0,0]
    arr[id] = 1
    this.setState({activeArray: arr, details: details})
    console.log(id, details)
  }

  render() {
    return (
      <div>
        <Button name="One"  id={0} active= {this.state.activeArray[0]} clickHandler={this.clickHandler} />
        <Button name="Two" id={1} active= {this.state.activeArray[1]} clickHandler={this.clickHandler} />
        <Button name="Three" id={2} active= {this.state.activeArray[2]} clickHandler={this.clickHandler} />
        <Button name="Four" id={3} active= {this.state.activeArray[3]} clickHandler={this.clickHandler} />
        <Details details={this.state.details}/>
      </div>
    )
  }
}

export default App;