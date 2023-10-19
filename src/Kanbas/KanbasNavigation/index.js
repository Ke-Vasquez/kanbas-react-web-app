import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { FaTachometerAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import "./index.css";
import "./northeastern.png";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"]
    const logo = require('./northeastern.png');


  const linkToIconMap = {
    Account: <BiUserCircle className="wd-account" />,
    Dashboard: <FaTachometerAlt className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <FaEnvelopeOpen className="wd-icon" />,
    History: <FaClock className="wd-icon"/>,
    Studio: <FaDesktop className="wd-icon"/>,
    Commons:<FaSignOutAlt className="wd-icon"/>,
    Help: <FaQuestionCircle className="wd-icon"/>,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
      <img src = {logo}/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;