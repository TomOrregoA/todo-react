import React from 'react';
import './TodosError.css';
import { FaCalendarTimes } from "react-icons/fa";

function TodosError() {
  return (
    <div className="container">
        <FaCalendarTimes className="FaCalendarTimes"/>
        <p>An error has occured!</p>
    </div>
  )
}

export { TodosError }; 