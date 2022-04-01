import React from 'react';
import TodoList from "../components/TodoList";

function TodoPage () {
    const todoListTitle:string = "Spisok del";
    return (
        <TodoList title={todoListTitle}/>
    );
}

export default TodoPage;