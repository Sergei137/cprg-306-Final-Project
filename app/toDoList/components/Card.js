import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import EditTask from '../modals/EditTask';
import ViewTask from '../modals/View';
import '../css/toDoList.css';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
  const [modal, setModal] = useState(false)
  const [view, setView] = useState(false)

  const colors = [
    {
      primaryColor : "#5D93E1",
      secondaryColor : "#ECF3FC"
    },
    {
      primaryColor : "#F9D288",
      secondaryColor : "#FEFAF1"
    },
    {
      primaryColor : "#5DC250",
      secondaryColor : "#F2FAF1"
    },
    {
      primaryColor : "#F48687",
      secondaryColor : "#FDF1F1"
    },
    {
      primaryColor : "#B964F7",
      secondaryColor : "#F3F0FD"
    }
  ]

  const toggle = () => {
    setModal(!modal)
  }

  const updateTask = (obj) => {
    updateListArray(obj, index)
  }

  const handleDelete = () => {
    deleteTask(index)
  }

  return (
    <div class = "card-wrapper mr-5" className=" relative w-72 h-52 mt-10 mr-5 shadow-lg flex flex-col p-10 bg-slate-50 bg-opacity-80">
      <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
      <div class = "task-holder">
        <span className="mt-5" class = "card-header" style={{"background-color":colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
        <p className = "mt-3" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{taskObj.Description}</p>
        <div className='absolute bottom-0 right-0'>
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="mr-3"
            style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"} }
            onClick = {() => setModal(true)}                        
          />
          <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj = {taskObj}/>
          <FontAwesomeIcon
            icon={faTrashAlt}
            style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}}
            onClick={handleDelete}
          />
        </div>
        <div className='absolute bottom-0 left-0'>
          <FontAwesomeIcon
          icon={faEye}
          style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}}
          onClick={() => setView(true)}/>
          <ViewTask modal={view} toggle={toggle} taskObj={taskObj} /> 
        </div>
      </div>       
    </div>
  );
};

export default Card;