import React, { useState } from 'react';
import ToDo from './ToDo'; 

const App = () => {

  const [todoList, setTodoList] = useState("");

  // array for changing state
  const [itemsList, setItemsList] = useState([]);

  const addTodo = (evt) => {

    const value = evt.target.value;

   // console.log(value);

    setTodoList(value);
  }

  const addItems = () => {
      
    if(todoList=="")
    return;

    setItemsList( (oldItems) => {
      return [...oldItems, todoList];
    });

    // for clearing the text box
    setTodoList("");
  }

  // for deleting
  const deleteItems = (id) => {
    console.log("deleted");

    setItemsList( (oldItems) => {
      return oldItems.filter((arrElement, index) => {
       
        return index !== id;

      })
    });

   }

return (
  <>
    <div className="main-div">
   <div className="center-div">
   <br/>
   <h1>To Do List</h1>
   <br/>
   <input type="text" onChange = {addTodo} 
   value={todoList} placeholder="Type anything ..."/>
   <button onClick = {addItems} > + </button>
   
   <ol>
     {/* <li>{todoList}</li> */}

   { itemsList.map( (item, index) => {
      
    return <ToDo 
    key={index}
    id = {index}
     text = {item} 
     onSelect = {deleteItems}
     />
   } ) }

   </ol>

   </div>
    </div>
  </>
)
};

export default App;