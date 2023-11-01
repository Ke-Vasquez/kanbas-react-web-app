import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database"
import "./index.css"
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="wd-assignment-main-div">
            <div className=" wd-buttons-ontop">
                <FaCheckCircle color="green"/>
                <h9>Published</h9>
                                    <button className="btn wd-ellip-button" color="whitesmoke">
                    <FaEllipsisV/>
                </button>
            </div>
            <div>
            <hr />
            <p>Assignment Name</p>
            <input value={assignment.title}
                className="form-control mb-2" />
            <hr />
            <div className="float-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn wd-button-can">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger">
                    Save
                </button>
            </div>
            </div>
        </div>
    );
}


export default AssignmentEditor;