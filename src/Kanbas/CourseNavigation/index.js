import { Link, useParams, useLocation } from "react-router-dom";
import "./styles.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings","Assignments", "Grades"
    ,"People", "Ponopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes",
    "Collaborations", "Syallabus", "Setting"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-nav-main">
        <div className="list-group" style={{ width: 150 }}>
        {links.map((link, index) => (
            <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {link}
            </Link>
        ))}
        </div>
    </div>
  );
}


export default CourseNavigation;
