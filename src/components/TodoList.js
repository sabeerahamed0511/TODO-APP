import React, { useContext } from "react";
import {Todos, EditTodo, TodoDescription, InputRef} from "../context/TodoContext";

export default function TodoList() {

    const {addTodoDescription} = useContext(TodoDescription);
    const {todos, toDeleteTodos} = useContext(Todos);
    const {toEditTodo} = useContext(EditTodo);
    const inputRef = useContext(InputRef);

    return <>
        <div id="list-container">
            {todos.map(list => {
                return <div className="list-align">
                    <input type={"text"} key={list.id} value={list.description} readOnly />
                        <div>
                            <button onClick={() => {
                                toEditTodo(list.id);
                                addTodoDescription(list.description);
                                inputRef.current.focus();
                                } }>
                                Edit
                            </button>

                            <button onClick={() => toDeleteTodos(list.id)}>
                                Delete
                            </button>
                        </div>
                </div>
            })}
        </div>
    </>
}