import React, {useState} from "react";
import "./App.css";


function App(){
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  function submitEdits(id){
    const newTodos = [...todos].map( (item)=>  {
      if (item.id === id) {
        item.text = editingText
      }
      return item
    }    
    )
    setTodos(newTodos);
    setTodoEditing(null)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false
  
    }
  
    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo))
      setTodo("")
    } else {
      alert("Enter a valid task to add")
      setTodo("")
    }
  }

  function handleDelete(id){
    let newTodos = [...todos].filter( (todo) => todo.id !== id)
    setTodos(newTodos);

  }

  function toggleComplete(id) {
    let newTodos = [...todos].map( (todo)=> {

      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    setTodos(newTodos) 
  }
  

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" align='right' onChange={(e)=> setTodo(e.target.value)} placeholder="Add a new task" value={todo}/>
        <button type="submit">Add todo</button>
      </form>
      {todos.map((item) => (
          <div className="todo" key={item.id}>
              <div className="todo-text">
                <input type="checkbox" id="completed" checked={item.completed} onChange={()=>toggleComplete(item.id)}/>
                {item.id === todoEditing? (
                <input type="text" onChange={(e) => setEditingText(e.target.value)} />
                ): (
                <div>{item.text}</div> 
                )}
                </div>
                <div className="todo-actions">    
                {item.id === todoEditing? (
                  <button onClick={ () => submitEdits(item.id)}>Submit Edits</button>
                ): (<button onClick={() => setTodoEditing(item.id)}> Edit </button>)}     
                <button type="submit" onClick={ () => handleDelete(item.id)}>Delete</button>
                </div>
            </div>
          )
        )
        }
    </div>
  )

}

  

export default App;