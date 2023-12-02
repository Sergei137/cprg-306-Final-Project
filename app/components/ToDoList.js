"use client"
import React, { useEffect, useState } from "react";
import CreateTask from "../models/createTask";
import Card from "./Card";
const ToDoList = () => {
    const [modal, setModal] = useState(false);
    
    const [taskList, setTaskList] = useState([]);

    //To fetch the created task from the local storage and keep it saved on the page
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()

    }

    const toggle = () => {
        setModal(!modal);
    }
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList)) // save task  to the local storage, we might update it to use firestore database
        setTaskList(tempList)
        setModal(false)
    }

    return(
        <div className="bg-slate-200">
          <div className="flex flex-col justify-center items-center bg-slate-400 h-200 p-12 w-full">
            <h3 className="italic">Welcome tp Your To Do List</h3>
            <button className="btn btn-primary mt-2 shadow-sm" onClick = {() => setModal(true)}>Create New Task</button>
          </div>
          <div className=" w-full flex flex-row  flex-wrap justify-evenly bg-slate-200" >
            {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray={updateListArray} />)}
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
          </div>
          
        </div>
    );
};

export default ToDoList;