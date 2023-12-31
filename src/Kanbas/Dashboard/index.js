import { Link } from "react-router-dom";
import db from "../Database"
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  const idToPicMap = {
    "RS101" : require("./images/RS101.jpeg"),
    "RS102" : require("./images/RS102.jpeg"),
    "RS103" : require("./images/RS103.webp"),
  };
  return (
    <div className="wd-main-dashboard-elements">
      <h1>Dashboard</h1>
      <hr/>
      <div className="wd-pub-course-num">
        <h2>Published Courses ({courses.length})</h2>
      </div>
      <hr/>
      <div className="list-group d-flex flex-row">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            <div className="card wd-card-design">
            <img className="card-img-top" src= {idToPicMap[course._id]} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">
                  {course.name}
                </h5>
                <p className="card-text">
                  {course._id} <br/>
                  {course.endDate}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
