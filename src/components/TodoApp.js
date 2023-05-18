import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoContext from "../context/TodoContext";

export default function TodoApp() {
    

    return <>
    <TodoContext>
        <div id="app-container">
            <h1>To-Do List</h1>
            <TodoInput />
            <TodoList />
        </div>
    </TodoContext>
    </>
}