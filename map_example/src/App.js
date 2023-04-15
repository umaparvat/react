import React from 'react';

function CheckList(props){
  var arr = [{id:1, product: "apple", price: 12}, 
             {id:2, propduct: "mango", price: 14},
             {id:3, product: "grapes", price: 26}
            ]
  var elements = arr.map( (item)=> {
    return <li key={item.id}> product: {item.product} | price: {item.price}</li>
  })
  return(
    <ol>
      {elements}
    </ol>
  )
}

function Direct(props){
  var ele = [{product: "soap"}, {product: "shampoo"}, {product: "brush"}]

  return (
    <ol>{
      ele.map((item, index)=> <li key={index}> product: {item.product}</li>)
    }</ol>
  )
}

function ListItem(props){
  return(
    <li>product: {props.product} | value: {props.value}</li>
  )
}

class ProductList extends React.Component {
  constructor(props){
    super(props)
    this.arrays = [ {product: "bed", value: 12000},
                    {product: "sofa", value:15000}, 
                    {product: "dinning table", value: 10000}
                  ]
  }

  render(){
    return(
      <div>
        <ol>{this.arrays.map((item, index)=> <ListItem key={index} product={item.product} value={item.value}/>)}</ol>
        <p>checks</p>
        <CheckList/>
        <p>direct retireval</p>
        <Direct/>
      </div>
    )
  }
}


export default ProductList;