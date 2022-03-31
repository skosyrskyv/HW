import React from 'react';
import './App.css'
type TodoListPropsType = {
    title:string,
    tasks:Array<TasksPropsType>
    del:Function
}
export type TasksPropsType = {
    id:number,
    name:string,

}

function TodoList(props:TodoListPropsType) {
    return (
    <div className={'container'}>
        <h1>{props.title}</h1>
        <ul className={'to-do'}>
            {
                props.tasks.map((t)=>{
                    return(
                        <li><span>{t.name}</span><button onClick={()=>{props.del(t.id)}}>complete</button></li>
                    )
                })
            }
        </ul>
    </div>
    )
}

export default TodoList;