function ShoppingTitle(props){
  return (
    <div>
      <h1> {props.title}</h1>
      <h2> Total number of items: {props.total}</h2>
    </div>
  )
}

function ListItem(props){
  let out = [];
  for(let i=0; i< props.items.length; i++) {
    out.push(<li>{props.items[i]}</li>)
  }
  return out;
}

function ShoppingList(props){
  return (
    <div>
      <h3> {props.header}</h3>
      <ol>
        <ListItem items={props.items}/>
      </ol>
    </div>
  )
}

function ShoppingApp(props){
  return (
    <div>
      <ShoppingTitle title="My Shopping List" total="9"/>
      <ShoppingList header="Food" items={["Apple", "Orange", "Mango"]}/>
      <ShoppingList header="Clothes" items={["Shirts", "Pants", "Ties"]}/>
      <ShoppingList header="Supplies" items={["Pen", "Pencil", "Eraser"]}/>

    </div>
  )
}

export default ShoppingApp;
