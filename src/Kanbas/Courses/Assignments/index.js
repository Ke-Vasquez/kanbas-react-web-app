import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { FaEllipsisV } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="wd-assignment-main-div">
      <div className="wd-top-section d-flex">
        <div>
          <input className="form-control wd-search" type="text" placeholder="Search for Assignment"></input>
        </div>
        <div className="wd-buttons-on-top">
          <button className="btn wd-buttons"> + Group </button>
          <button className="btn btn-danger">+ Assignment </button>
          <button className="btn wd-buttons"> <FaEllipsisV className="wd-icons" /> </button>
        </div>
      </div>
      <hr />
      <ul className="list-group">
        <li className="list-group-item list-group-item-dark">
          <FaEllipsisV />
          <FaEllipsisV />
          <FaCaretDown />
          ASSIGNMENTS
          <div className="wd-end-of-assignments d-flex flex-1 align-self-center">
            <div className="wd-pill-div">
              <button className="rounded-pill wd-pill">
                40% of total
              </button>
            </div>
            <FaPlus />
            <FaEllipsisV />
          </div>
        </li>
        {courseAssignments.map((assignment) => (
          <li className="list-group-item wd-list-group">
            <FaEllipsisV />
            <FaEllipsisV />
            <FaCaretRight />
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className=" wd-links">
              {assignment.title}
            </Link>
            <div className="float-end">
              <FaCheckCircle className="wd-check-green" />
              <FaEllipsisV />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Assignments;
