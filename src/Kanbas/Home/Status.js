import "./index.css";
import { FaFileImport } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaCrosshairs } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

function Status() {
    const listItems = ["Import Existing Content", "Import from Commons", "Choose Home Page", "View Course Stream", "New Announcements"
        , "New Analytics", "View Course Notifications"];
    const itemToIconMap = {
        "Import Existing Content" : <FaFileImport className="wd-status-icons"/>,
        "Import from Commons": <FaArrowCircleRight className="wd-status-icons"/>,
        "Choose Home Page" : <FaCrosshairs className="wd-status-icons"/>,
        "View Course Stream" : <FaChartBar className="wd-status-icons" /> ,
        "New Announcements" : <FaBullhorn className="wd-status-icons"/> ,
        "New Analytics" : <FaChartBar className="wd-status-icons"/> ,
        "View Course Notifications": <FaBell className="wd-status-icons"/>,
    };
    return (
        <div className="wd-status-bar-div">
            <div className="wd-status-list">
                <ul className="list-group">
                    {listItems.map((module) => (
                        <li className="list-group-item">
                            <a href="javascript:void(0)">
                            {itemToIconMap[module]}
                            {module}
                            </a>
                        </li>
                    )
                    )}
                </ul>
            </div>
            <div>
                <h4>To Do</h4>
                <hr />
                <div className="wd-assignments">
                    <a href="javascript:void(0)"> Grade A1 - ENV + HTML</a>
                </div>
                <div className="wd-assignments">
                <a href="javascript:void(0)"> Grade A1 - ENV + HTML</a>
                </div>
            </div>
        </div>
    );
}

export default Status;