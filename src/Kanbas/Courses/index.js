import db from "../../Kanbas/Database";
import {useParams, Routes, Route, Navigate, useLocation,pathname } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./index.css"
import CourseNavigation from "../CourseNavigation";
import Modules from "../Modules";

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const preCrumb = course.name + " " + course._id + " " + ">";

  return (
    <div>
        <div className="wd-course-main">
            <div className="wd-vertical-line-div">
                <FaBars className="wd-vertical-lines"/>
            </div>
            <h3> {preCrumb} {screen} </h3>
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
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
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
