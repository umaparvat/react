import React from 'react';

class ControlledInput extends React.Component {
  constructor(props){
    super(props)
    this.state  = {value: 'apple', checked: false}
    this.handleEvent = this.handleEvent.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }
  handleEvent(event){
    this.setState({[event.target.name]: event.target.value})
    console.log("value is:"+ this.state.value)
  }
  handleCheckChange(event){
    this.setState({checked: event.target.checked})
    console.log("check box value:"+this.state.checked)
  }

  render(){
    var array=["Apple", "Mango", "Orange"]
    var options = array.map((item, index)=> <option key={index} value={item}>{item}</option>)
    return(
      <form>
        
        
        <input name="textName" type="text" value={this.state.textName} onChange={this.handleEvent}/> 
        
        <input name="checkboxName" type="checkbox" checked={this.state.checkboxName} onChange={this.handleEvent}/>
        <textarea name="textAreaName" value={this.state.textAreaName} onChange={this.handleEvent}/>
        
       <select name="selectName" value={this.state.selectName} onChange={this.handleEvent}>
          {options}
       </select>
      
      </form>

    )
  }
}

export default ControlledInput;