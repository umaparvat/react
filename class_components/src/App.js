import React from 'react';


class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state= {"foo": 1, "bar":2, "message": "welcome", "count": 0};
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState((prevState, props) => {
      return {"count": prevState.count+1, "message": "earler count was "+ prevState.count}
    })

  }
  componentDidMount() {
    this.setState({"message": "updated"})
  }
  render() {
    return (
      <div>
        <div> foo: {this.state.foo}, bar: {this.state.bar}, message: {this.state.message}</div>
        <div> <button onClick={this.clickHandler}>{this.state.count}</button></div>
        </div>
    )
  }
}

export default Counter;