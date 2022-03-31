import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksPropsType} from "./TodoList";



function App() {
    const TodoList_title:string = "Spisok del";


    let initTasks:Array<TasksPropsType> = [
        {id:1 ,name:"Go to university"},
        {id:2 ,name:"Create react app"},
        {id:3 ,name:"Create repository"},
        {id:4 ,name:"push to repository"}
    ]

    let arr = useState(initTasks);

    let tasks = arr[0];
    let setTasks = arr[1];

    function Del(id:number){
        let filteredTasks = tasks.filter(t=> t.id !== id)
        return setTasks(filteredTasks);
    }
    return (
    <TodoList title={TodoList_title} tasks={tasks} del={Del}/>
    );
}



export default App;
