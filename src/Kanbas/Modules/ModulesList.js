import React from "react";
import { useParams } from "react-router-dom";
import db from "../Database";
import "./styles.css";
import { FaEllipsisV } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="wd-main-modules-div ">
      <div className="wd-buttons">
        <button className="btn wd-button-styling">Collapse all</button>
        <button className="btn wd-button-styling">View Progress</button>
        <button className="btn wd-button-styling">Publish all</button>
        <button className="btn btn-danger">+ Module</button>
        <button className="btn wd-button-styling"> <FaEllipsisV className="wd-ellip-img"/> </button>
      </div>
      <hr/>
      <ul className="list-group">
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item border wd-list-item">
                <div className="d-flex wd-items-in-mod">
                  <div>
                    <FaEllipsisV className="wd-ellip-img" />
                    <FaEllipsisV className="wd-ellip-img" />
                    <FaCaretRight className="wd-carret-img" />
                  </div>
                  <div className="wd-mod-name-div">
                    <h5>{module.name}</h5>
                  </div>
                </div>
              </li>
            ))
        }
      </ul>
    </div>
  );
}
export default ModuleList;