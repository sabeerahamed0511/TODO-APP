import React, { useContext } from "react";
import { TodoDescription, Todos, EditTodo, InputRef } from "../context/TodoContext";



export default function TodoInput() {
    
    const {todoDescription, addTodoDescription} = useContext(TodoDescription);
    const {addTodos} = useContext(Todos);
    const {editTodo} = useContext(EditTodo);
    const inputRef = useContext(InputRef);

    return <>
        <div id="input-container">
            <input type="text" 
                ref={inputRef} 
                id="task" value={todoDescription} 
                onChange={(e) => addTodoDescription(e.target.value)} 
                placeholder={"Type here..."} />
            <button id="btn" onClick={(e) => addTodos(e.target.innerText)} >{editTodo ? "Ok" : "Add To-Do"}</button>
        </div>
    </>
}