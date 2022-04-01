import React, {useState} from 'react';
import '../App.css'
import {Task} from "../interfaces/interfaces";

interface TodoListPropsType {
    title:string
}
const initTasks:Array<Task> = [
    {id:1 ,name:"Go to university"},
    {id:2 ,name:"Create react app"},
    {id:3 ,name:"Create repository"},
    {id:4 ,name:"push to repository"}
]

function TodoList({title}:TodoListPropsType) {
    const [tasks,setTasks] = useState(initTasks);

    function remove(id:number){
        let filteredTasks = tasks.filter(t=> t.id !== id)
        return setTasks(filteredTasks);
    }

    function add(){
        let newArr = tasks;
        newArr.push({id: newArr.length + 1, name:'asdasd'});
        console.log(newArr);
        return setTasks([]);
    }

    return (
    <div className={'container'}>
        <h1>{title}</h1>
        <ul className={'to-do'}>
            {
                tasks.map((task)=>{
                    return(
                        <li><span>{task.name}</span><button onClick={()=>{remove(task.id)}}>complete</button></li>
                    )
                })
            }
        </ul>
        <button onClick={()=>add()}>Add</button>
    </div>
    )
}

export default TodoList;