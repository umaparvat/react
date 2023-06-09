import React from 'react';

function Circle(props) {
  var color = "white";
  if (props.cell === 1){
    color = "black"
  } else if (props.cell === 2){
    color = "red"
  }
  var style = {
    backgroundColor: color,
    border: "1px solid black",
    borderRadius: "100%",
    paddingTop: "98%"
  }
  return (
    <div style={style}> </div>
  )
}

function Cell(props) {
  var style = {
    height: 50,
    width: 50,
    boder: "1px solid black",
    backgroundColor: "yellow"
  }

  return(
    <div style={style} onClick={()=> {props.clickHandler(props.row, props.col)}}><Circle cell={props.cell}/></div>
  )
}

function Row(props){
  var style = {
    display: "flex"
  }
  var cells = []
  for (var i=0; i< 7; i++){
    cells.push(<Cell key={i} col={i} row={props.row} cell={props.cells[i]} clickHandler={props.clickHandler}/>)
  }

  return (
    <div style={style}>
      {cells}
    </div>
  )
}

class HeaderApp extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.turn} Turn</h1>
      </div>
    )
  }
}

function Board(props) {
  var rows = []
  for(var i= 0;i<6; i++) {
    rows.push(<Row key={i} row={i} cells={props.cells[i]}  clickHandler={props.clickHandler}/>)
  }

  return(
    <div>{rows}</div>
  )
}

class ButtonApp extends React.Component {
  render() {
    return(
      <div>
        <button onClick={() => this.props.reset()}> Restart</button>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props){
    super(props)
    var cells = []
    for (var i = 0; i< 6; i++){
      cells.push(new Array(7).fill(0))
    }
    this.state = {player: false, cells:cells, winner:0}
    this.handleClicker = this.handleClicker.bind(this)
    this.restart = this.restart.bind(this)
  }
  findAvailableRow(col){
    for (let i = 0; i< 6; i++){
      if(this.state.cells[i][col]==0){
        return i
      }
    }
    return -1
  }
  handleClicker(row, col){
    if (this.state.winner){
      return
    }
    console.log("row:"+ row + "|col:" + col)
    console.log(this.state.cells)
    let temp = []
    for (let i=0; i< 6; i++){
      temp.push(this.state.cells[i].slice())
    }
    var newRow = this.findAvailableRow(col)
    temp[newRow][col] = this.state.player? 1: 2
    this.setState({cells: temp, player: !this.state.player}, ()=>{
      if (this.checkVictory(newRow, col)){
        console.log("won")
        this.setState({winner: this.state.player? 2: 1})
      }

    })
  }
  checkDiagonal(row,col){
    //find right and left tops
    var c = this.state.cells;
    var val = this.state.player? 2:1;
    var rR = row;
    var cR = col;
    while(rR < 5 && cR < 6){
        rR++; 
        cR++;
    }

    while( rR >= 3 && cR >= 3){
        if(c[rR][cR] == val && c[rR-1][cR-1] == val && c[rR-2][cR-2] == val && c[rR-3][cR-3] == val){
            return 1
        }
        rR--
        cR--
    }   

    var rL = row;
    var cL = col;

    while(rL < 5 && cL > 0){
        rL++
        cL--
    }

    while(rL >= 3 && cL <= 3){
        if(c[rL][cL] == val && c[rL-1][cL+1] == val && c[rL-2][cL+2] == val && c[rL-3][cL+3] == val){
            return 1
        }
        rL--
        cL++
    }
    return 0
}
checkHorizontal(row,col){
    var c = this.state.cells;
    var i = 6;
    var val = this.state.player? 2:1;

    while( i >= 3){
        if(c[row][i] == val && c[row][i-1] == val && c[row][i-2] == val && c[row][i-3] == val){
            return 1
        }
        i--
    }
    return 0
}
checkVertical(row,col){
    var c = this.state.cells;
    var i = row;
    var val = this.state.player? 2: 1;

    if(i >= 3){
        if(c[i][col] == val && c[i - 1][col] == val && c[i - 2][col] == val && c[i - 3][col] == val){
            return 1
    }
    }
    return 0

}
checkVictory(row,col){
    return this.checkVertical(row,col)   || this.checkHorizontal(row,col) ||   this.checkDiagonal(row,col)


}

  restart(){
    var cells = []
    for (let i=0; i<6; i++){
      cells.push(new Array(7).fill(0))
    }
    this.setState({cells: cells, player: false, winner: 0})
  }

  render() {
    return(
      <div>
      <HeaderApp turn={this.state.player? "Black": "Red"}/>
      <Board cells={this.state.cells} clickHandler={this.handleClicker}/>
      <ButtonApp  reset={this.restart}/>

    </div>
    )
  }

}

export default Game;