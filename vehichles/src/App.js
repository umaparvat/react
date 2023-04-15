function VehiclesHeader(props){
  return(
    <div>
      <h1>Welcome to React Transportation</h1>
      <h2> The best place to buy vehicles online</h2>
    </div>
  )
}
function SelectOption(props){
  return(
    <option value={props.item}>{props.item}</option>
  )
}

function Vehicles(props){
  let table= [];
  for (let i=0; i< props.vehicles.length; i++){
    table.push(<h2> {props.vehicles[i].name}</h2>)
    let vlist = [];
    for (let j=0; j< props.vehicles[i].option.length; j++){
      vlist.push(<tr><th>Year</th><th>Model</th><th>Price</th><th>Buy</th></tr>)
      vlist.push(<tr><td>{props.vehicles[i].option[j].year}</td><td>{props.vehicles[i].option[j].model}</td><td>{props.vehicles[i].option[j].price}</td><td>{props.vehicles[i].option[j].buy}</td></tr>)

    }
    table.push(<table className="table" border="1"><tbody>{vlist}</tbody></table>)
  }
  return table;
}

function Options(props){
  return(
    <div>
      <h3> Choose Options</h3>
      <div>
        <p>New Only</p><input type="checkbox" value="value" checked/>
      </div>
      <div>Select type
        <select>
          <SelectOption item={props.item[0]}/>
          <SelectOption item={props.item[1]}/>
          <SelectOption item={props.item[2]}/>
          <SelectOption item={props.item[3]}/>
        </select>

      </div>
    </div>
  )
}

function App(props){
  let data=[{name: 'Cars', 
  option:[{year: 2013, model: 'A', price: '$32000'},
             {year: 2011, model: 'B', price: '$4400'},
             {year: 2016, model: 'B', price: '$15500'}
           ]
 },
 {name: 'Trucks', 
  option:[{year: 2014, model: 'D', price: '$18000'},
             {year: 2013, model: 'E', price: '$5200'}
             
           ]
 },
 {name: 'Convertibles', 
  option:[{year: 2009, model: 'F', price: '$2000'},
             {year: 2010, model: 'G', price: '$6000'},
             {year: 2012, model: 'H', price: '$12500'},
             {year: 2017, model: 'M', price: '$50000'}
           ]
 },

 
 ];
  return (
    <div>
      <VehiclesHeader/>
      <Options item={["All", "Car", "Trucks","Convertibles"]}/>
      <div>
        <Vehicles vehicles={data}/>
      </div>
    </div>
  )
}

export default App;