import {useParams, Routes, Route, Navigate, useLocation,pathname } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./index.css"
import CourseNavigation from "../CourseNavigation";
import Modules from "../Modules";
import Home from "../Home";
import { useState, useEffect } from "react";
import axios from "axios";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaGlasses } from "react-icons/fa";

function Courses() {
  const { courseId } = useParams();

  const [course, setCourse] = useState({});

  const URL = "http://localhost:4000/api/courses";
  
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const {pathname} = useLocation();
  const [empty, kanbas, course_name, id, screen] = pathname.split("/");
  const preCrumb = course.name + " " + course.number + " " + ">";
  console.log(JSON.stringify(course));


  return (
    <div>
        <div className="wd-course-main">
            <div className="wd-vertical-line-div">
                <FaBars className="wd-vertical-lines"/>
            </div>
            <h3> {preCrumb} {screen} </h3>
            <div className="wd-student-view-btn">
            <button className="btn wd-student-view-btn-prop">
              <FaGlasses style={{color:"grey", paddingRight: 2}}/>
              Student View
              </button>
            </div>
        </div>
        <hr className="wd-hrs"/>
        <div className="wd-pre-nav-desc">
            <p> {courseId} {course.number} {course.endDate}</p>
          </div>
       <div>
          <CourseNavigation/>
          <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}>

          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element= {<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

       </div>
    </div>
  );
}
export default Courses;
