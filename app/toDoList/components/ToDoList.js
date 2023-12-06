"use client"
import React, { useEffect, useState } from "react";
import CreateTask from "../modals/createTask";
import Card from "./Card";
import '../css/toDoList.css';

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
    <div className="">
      <div className="flex flex-col justify-center items-center h-200 p-12 w-full">
        <h3 className="italic text-cyan-50">Welcome to Your To Do List</h3>
        <button className=" create-task-button mt-5 shadow-sm text-gray-700 hover:bg-blue-800 hover:text-white" onClick = {() => setModal(true)}>Create New Task</button>
      </div>
      <div className=" w-full flex flex-row  flex-wrap justify-evenly" >
        {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray={updateListArray} />)}
        <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
      </div>
    </div>
  );
};

export default ToDoList;