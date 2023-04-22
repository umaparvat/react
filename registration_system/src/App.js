import React from 'react';

function SelectOption(props){
  var options = ["Science Lab", "Swimming", "Cooking", "Painting"]
  var elements = options.map((item, index)=> <option key={index} value={item}>{item}</option>)

  return(
    <select name={props.name} onChange={props.change}>
      {elements}
    </select>
  )

}

function CheckBoxes(props){
 

  return (
    
      props.checkvalues.map((item, index)=> {
        return (<div key={item}>
          <input key={index} type='checkbox' name={props.cnames[index]} onChange={props.change} checked={props.cnum[index]}/>
          <span>{item}</span>
        </div>)
      })
    
  )

}
function RemoveButton(props){
  var button_style={
    width: 25,
    height: 25
  }
  return(
    <button style={button_style} key={props.identy} onClick={props.click}>{props.text}</button>
  )
}

function TableRows(props){

  return(
    props.arrays.map( (item, index)=> <tr key={index}><td><RemoveButton indenty={index} text="x" click={props.remove(index)}/></td><td>{item.firstName}</td><td>{item.lastName}</td><td>{item.activity}</td><td>{item.restrictions}</td></tr>)
  )
}


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {checkvalues: ['Dietary Restrictions', 'Physical Disabilities', 'Medical Needs'], 
                  ccheck: [],
                  checkNames: ['dietary', 'physical', 'medical'],
                  table_values: []}
    this.handleEvent = this.handleEvent.bind(this)
  }
  handleClick(){
    console.log("called cick")
    var tempval = this.state.table_values.slice();
    var tempnum = this.state.ccheck.slice();
    var restrictions = []
    if (this.state.dietary === "on"){
      restrictions.push(this.state.checkvalues[0])
      tempnum[0] = !tempnum[0]
    }
    if (this.state.physical === "on"){
      restrictions.push(this.state.checkvalues[1])
      tempnum[1] = !tempnum[1]
    }
    if (this.state.medical === "on"){
      restrictions.push(this.state.checkvalues[2])
      tempnum[2] = !tempnum[2]
    }
    tempval.push({firstName: this.state.firstName, 
                  lastName: this.state.lastName, 
                  activity: this.state.activity, 
                  restrictions: restrictions.join()})
    this.setState({table_values: tempval, ccheck:tempnum, 
                   dietary: "off", 
                   physical: "off", 
                   medical: "off", firstName: "", lastName: "", activity: ""})
    


  }

  handleEvent(event){
    if (this.state.checkvalues.includes(event.target.name)){
        var index = this.state.checkvalues.indexOf(event.target.name)
        var tempcheck = this.state.ccheck.slice()
        tempcheck[index] = 1
        console.log(tempcheck)
        this.setState({ccheck: tempcheck})

    }
    this.setState({[event.target.name]: event.target.value})
    console.log("name"+event.target.name, "value"+event.target.value)
  }
  removeRow(index){
    var temptable = this.state.table_values.slice()
    temptable.splice(index, 1)
    this.setState({table_values:temptable})
  }
  render(){
    return (
      <div>
        <div>
          First Name
          <input type='text' name="firstName" onChange={this.handleEvent}/><br/>
          Last Name
          <input type='text' name="lastName" onChange={this.handleEvent}/><br/>
          Select Activity
          <SelectOption name="activity" change={this.handleEvent}/><br/>
          Check all that apply
          <CheckBoxes cnames={this.state.checkNames} cnum={this.state.ccheck} checkvalues={this.state.checkvalues} change={this.handleEvent}/><br/>
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </div>
        <div show={this.state.table_values.length}>
          <table border={1}>
            <thead>
              <tr><th>Remove</th><th>FristName</th><th>LastName</th><th>Activity</th><th>Restirctions</th></tr>
            </thead>
            <tbody>
              <TableRows arrays={this.state.table_values} remove={()=> this.removeRow.bind(this)}/>
            </tbody>

          </table>
        </div>

      </div>

    )
  }
}

export default App;