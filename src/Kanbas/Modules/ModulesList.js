import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";
import { FaEllipsisV } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules} from "./modulesReducer";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();
  
  const modules = useSelector((state) => state.modulesReducer.modules);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleUpdateModule = async (moduleId) => {
    const status = await client.updateModule(moduleId);
    dispatch(updateModule(moduleId));
  };


  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="wd-main-modules-div ">
      <div className="wd-buttons">
        <button className="btn wd-button-styling">Collapse all</button>
        <button className="btn wd-button-styling">View Progress</button>
        <button className="btn wd-button-styling">Publish all</button>
        <button className="btn btn-danger">+ Module</button>
        <button className="btn wd-button-styling"> <FaEllipsisV className="wd-ellip-img" /> </button>
      </div>
      <div style={{ display: "flex", height: 45 }}>
        <button className="btn btn-success" onClick={handleAddModule} >Add</button>
        <button className="btn btn-primary" onClick={() => handleUpdateModule(module)}>Update</button>
        <input value={module.name} className="form-control" type="text" style={{ width: 250 }}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
        <textarea value={module.description} style={{ width: 500 }} className="form-control"
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>

      </div>
      <hr />

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
                  <div className="ms-auto p-2">
                    <FaCheckCircle className="wd-check-green" />
                    <FaPlus />
                    <FaEllipsisV />
                    <button className="btn btn-danger"  onClick={() => handleDeleteModule(module._id.$oid) }> Delete </button>
                    <button className="btn btn-success" onClick={() => dispatch(setModule(module))}> Edit </button>
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