import React, { useState, useRef, useEffect } from "react";
import { getTodo, addTodo, updateTodo, deleteTodo } from "../utils/api-util";

export const TodoDescription = React.createContext();
export const Todos = React.createContext();
export const EditTodo = React.createContext();
export const InputRef = React.createContext()

export default function TodoContext({ children }) {

    const [todoDescription, setTodoDescription] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        getTodo()
        .then(res => setTodos(res))
    }, []);

    function toAddOrUpdateTodo(type) {
        if (!todoDescription) return;
        if (type == "Ok") {
            const obj = { id: editTodo, description: todoDescription };
            updateTodo(obj)
            .then(res => {
                for (let i = 0; i < todos.length; i++) {
                    if (res.id == todos[i].id) {
                        todos[i].description = res.description;
                        setTodos(todos);
                        setTodoDescription("");
                        setEditTodo("");
                        return;
                    }
                }
            })
            
        } else {
            const obj = { id: new Date().getTime(), description: todoDescription };
            addTodo(obj)
            .then(res => {
                setTodos([...todos, res]);
                setTodoDescription("");
            })
            
        }
    }

    function toDelete(key) {
        deleteTodo(key)
        .then(res => {
            if(res.status == 200){
                setTodos(todos.filter(list => list.id != key));
            }
        })
        
    }

    return <TodoDescription.Provider
        value={{
            addTodoDescription: (inputText) => setTodoDescription(inputText),
            todoDescription: todoDescription,
            
        }}>

        <Todos.Provider value={{
            todos: todos,
            addTodos: (type) => toAddOrUpdateTodo(type),
            toDeleteTodos: (val) => toDelete(val)
        }}>

            <EditTodo.Provider value={{
                editTodo: editTodo,
                toEditTodo: (val) => setEditTodo(val)
            }}>

                <InputRef.Provider value={inputRef}>

                    {children}

                </InputRef.Provider>
            </EditTodo.Provider>
        </Todos.Provider>
    </TodoDescription.Provider>
}