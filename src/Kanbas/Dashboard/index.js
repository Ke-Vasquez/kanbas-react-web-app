import { Link } from "react-router-dom";
import { React, useState } from "react";
import "./index.css";

const idToPicMap = {
  "RS101": require("./images/RS101.jpeg"),
  "RS102": require("./images/RS102.jpeg"),
  "RS103": require("./images/RS103.webp"),
};

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {

  return (
    <div className="wd-main-dashboard-elements">
      <h1>Dashboard</h1>
      <div style={{ display: "flex", width: "100%" }}>
        <input value={course.name} className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        <button className="btn btn-success" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-primary" onClick={updateCourse}>
          Update
        </button>
      </div>
      <hr />
      <div className="wd-pub-course-num">
        <h2>Published Courses ({courses.length})</h2>
      </div>
      <hr />
      <div className="list-group d-flex flex-row mb-3">
        {courses.map((course) => (
          <Link key={course.number} to={`/Kanbas/Courses/${course.number}`} className="list-group-item p-3">
            <div className="card wd-card-design">
              <img className="card-img-top" src={idToPicMap["RS102"]} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">
                  {course.name}
                </h5>
                <p className="card-text">
                  {course.number} <br />
                  {course.endDate}
                </p>
                <button className="btn btn-warning" onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id.$oid);
                }}>
                  Delete
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
