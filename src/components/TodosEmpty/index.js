import React from 'react';
import './TodosEmpty.css';
import { FaCalendarTimes } from "react-icons/fa";

function TodosEmpty() {
  return (
    <div className="container">
        <FaCalendarTimes className="FaCalendarTimes"/>
        <p>Your Todo List is empty.</p>
    </div>
  )
}

export { TodosEmpty }; 