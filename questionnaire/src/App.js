import React from 'react';

function ChoiceOption(props){
  var button_style = {
    width: "80%",
    margin: "5px"
  }
  var ch = []
  for (let i = 0; i< 4; i++){
    ch.push(<div><button style={button_style} key={i} id={i} onClick={()=> props.clickHandler(i)}>{props.choices[i]}</button></div>)
  }
  return(
    <div>{ch}</div>
  )
}

class Questionnarie extends React.Component {
  constructor(props){
    super(props)
    this.state = {questions: ["1. whose is the prime minister of india 2023?", 
                              "2. when is women's day celebrated?", 
                              "3. what is 8*1?"], 
                  choices: [["Manmonhan singh", "NarendraModi", "Nirmala Seetharaman", "Stalin"],
                            ["March 8", "May 8", "June 8", "November 8"],
                            [5,6,4,8]
                           ],
                  ans:[1,0,3],         
                  show: 0, correct:0, incorrect: 0, finished: 1}
    this.clickHandler = this.clickHandler.bind(this)
  }
  checkAnswer(question_num, id){
    if (this.state.ans[question_num] === id) {
      return true
    } else {
      return false
    }
  }
  clickHandler(id){
    var current = 0
    var cor = 0
    var inc = 0
    var finished = 0
    if (this.checkAnswer(this.state.show, id)) {
        cor = 1
    } else {
      inc = 1
    }
    if (this.state.show+1 >= this.state.questions.length){
      finished = 0
      current = 0
    } else {
      current = this.state.show+1
      finished = this.state.finished
    }
    
    console.log("current now is:" + current)
    this.setState({show: current , 
                   correct: this.state.correct+cor, 
                   incorrect: this.state.incorrect+inc, 
                   finished: finished}
                   )
  }

  restart(){
    this.setState({show: 0, correct: 0, incorrect: 0, finished:1})
  }

  render(){
    var colstyle = {
      width: "600px",
      display: "table-cell"
    }
    var anothercolsytle = {
      display: "table-cell"
    }
    var Rcolstyle = {
      display: 'table-row'
    }
    var float_container={
      width: "100%",
      overflow: "hidden",
      display: "table"
    }
    return (
      <div >
        <div hidden={!this.state.finished}>
          <div><h1>{this.state.questions[this.state.show]}</h1></div>
          <div style={float_container}>
            <div style={Rcolstyle}>
              <div style={colstyle}>
                <ChoiceOption clickHandler={this.clickHandler} choices={this.state.choices[this.state.show]}/>
              </div>
              <div style={anothercolsytle}>
                <div><h3> Correct:{this.state.correct}</h3></div>
                <div><h3> Incorrect: {this.state.incorrect}</h3></div>
              </div>
            </div>
         
          </div>

        </div>
       <div hidden={this.state.finished}>
        <h2> Your Result</h2>
        <h3>Correct: {this.state.correct}</h3>
        <h3>Incorrect: {this.state.incorrect}</h3>
        <h1> Game Over</h1>
        <div>
          Do you want to start again? <button onClick={()=> this.restart()}> Restart</button>
        </div>
       </div>

      </div>

      
    )
  }
}

export default Questionnarie;