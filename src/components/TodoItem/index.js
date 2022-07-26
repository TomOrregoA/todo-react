import React from 'react';
import './TodoItem.css';
import { FaTrashAlt } from "react-icons/fa";
function TodoItem(props) {

  return (
      <li className="TodoItem">
        <input
          type='checkbox'
          defaultChecked={props.completed} 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={ props.onComplete } 
        ></input>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
        <FaTrashAlt 
          className="Icon Icon-delete"
          onClick={ props.onDelete }
        />
      </li>
  )
}

export { TodoItem };